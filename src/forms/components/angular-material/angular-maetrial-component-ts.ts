import * as path from 'path';
import * as conf from '../../../conf';
import {Config} from '../../../generate';
import {indent, writeFile} from '../../../utils';

export interface FieldDefinitionObj {
  content: string;
  paramsArray: string[];
}

export function createComponentTs(config: Config, name: string, simpleName: string, formSubDirName: string,
                                  className: string) {

  let content = '';
  content = getImports(content, name, simpleName, className);
  content = getComponent(simpleName, content);

  content += `export class ${className}Component implements OnInit {\n`;

  content = getConstructor(content, name, simpleName, className);
  content = getNgOnInit(content);
  content = getFormSubmitFunction(content, name, simpleName);
  content += '}\n';

  const componentHTMLFileName = path.join(formSubDirName, conf.componentsDir, `${simpleName}.component.ts`);
  writeFile(componentHTMLFileName, content, config.header);
}

export function getImports(content: string, name: string, simpleName: string, className: string) {
  content += 'import {Component, OnInit} from \'@angular/core\';\n';
  content += `import {${name}Service} from '../../../controllers/${name}';\n`;
  content += `import {${className}FormService} from './${simpleName}.service';\n`;
  content += '\n';
  return content;
}

export function getComponent(simpleName: string, content: string) {
  content += '@Component({\n';
  content += indent(`selector: '${simpleName}',\n`);
  content += indent(`templateUrl: './${simpleName}.component.html',\n`);
  content += '})\n';
  content += '\n';
  return content;
}

export function getConstructor(content: string, name: string, simpleName: string, className: string) {
  content += indent('constructor(\n');
  content += indent(indent(`public ${simpleName}FormService: ${className}FormService,\n`));
  content += indent(indent(`private ${name.toLowerCase()}Service: ${name}Service,\n`));
  content += indent(') {}\n');
  content += '\n';
  return content;
}

export function getNgOnInit(content: string) {
  content += indent('ngOnInit() {\n');
  content += indent('}\n');
  content += '\n';
  return content;
}

export function getFormSubmitFunction(content: string, name: string, simpleName: string) {
  content += indent(`${name.toLowerCase()}() {\n`);
  content += indent(indent(`this.${name.toLowerCase()}Service.${simpleName}(this.${simpleName}FormService.form.value);\n`));
  content += indent('}\n');
  content += '\n';
  return content;
}
