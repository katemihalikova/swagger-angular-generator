"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const conf = require("../../../conf");
const utils_1 = require("../../../utils");
function createComponentTs(config, name, simpleName, formSubDirName, className) {
    let content = '';
    content = getImports(content, name, simpleName, className);
    content = getComponent(simpleName, content);
    content += `export class ${className}Component implements OnInit {\n`;
    content = getConstructor(content, name, simpleName, className);
    content = getNgOnInit(content);
    content = getFormSubmitFunction(content, name, simpleName);
    content += '}\n';
    const componentHTMLFileName = path.join(formSubDirName, conf.componentsDir, `${simpleName}.component.ts`);
    utils_1.writeFile(componentHTMLFileName, content, config.header);
}
exports.createComponentTs = createComponentTs;
function getImports(content, name, simpleName, className) {
    content += 'import {Component, OnInit} from \'@angular/core\';\n';
    content += `import {${name}Service} from '../../../controllers/${name}';\n`;
    content += `import {${className}FormService} from './${simpleName}.service';\n`;
    content += '\n';
    return content;
}
exports.getImports = getImports;
function getComponent(simpleName, content) {
    content += '@Component({\n';
    content += utils_1.indent(`selector: '${simpleName}',\n`);
    content += utils_1.indent(`templateUrl: './${simpleName}.component.html',\n`);
    content += '})\n';
    content += '\n';
    return content;
}
exports.getComponent = getComponent;
function getConstructor(content, name, simpleName, className) {
    content += utils_1.indent('constructor(\n');
    content += utils_1.indent(utils_1.indent(`public ${simpleName}FormService: ${className}FormService,\n`));
    content += utils_1.indent(utils_1.indent(`private ${name.toLowerCase()}Service: ${name}Service,\n`));
    content += utils_1.indent(') {}\n');
    content += '\n';
    return content;
}
exports.getConstructor = getConstructor;
function getNgOnInit(content) {
    content += utils_1.indent('ngOnInit() {\n');
    content += utils_1.indent('}\n');
    content += '\n';
    return content;
}
exports.getNgOnInit = getNgOnInit;
function getFormSubmitFunction(content, name, simpleName) {
    content += utils_1.indent(`${name.toLowerCase()}() {\n`);
    content += utils_1.indent(utils_1.indent(`this.${name.toLowerCase()}Service.${simpleName}(this.${simpleName}FormService.form.value);\n`));
    content += utils_1.indent('}\n');
    content += '\n';
    return content;
}
exports.getFormSubmitFunction = getFormSubmitFunction;
//# sourceMappingURL=angular-maetrial-component-ts.js.map