import * as path from 'path';
import {ProcessedDefinition} from '../../../definitions';
import {Config} from '../../../generate';
import {Parameter, Schema} from '../../../types';
import {indent, writeFile} from '../../../utils';

import * as conf from '../../../conf';
import {FieldDefinitionObj} from './angular-maetrial-component-ts';

export interface Validator {
  type: string;
  errorDescription: string;
}

export function createComponentHTML(config: Config, name: string,
                                    paramGroups: Parameter[], schemaObjectDefinitions: ProcessedDefinition[],
                                    formSubDirName: string, simpleName: string) {

  const schemaObjectDefinitionsKeys: string[] = schemaObjectDefinitions.map(s => s.name.toLowerCase());
  const submitFunctionName = `${name.toLowerCase()}`;

  let content = '';
  content = getBeginingOfFile(content, submitFunctionName, name,
    simpleName);

  const fieldDefinition: FieldDefinitionObj = getFieldDefinition(paramGroups, schemaObjectDefinitionsKeys,
                                                                 schemaObjectDefinitions, content);
  content = fieldDefinition.content;

  content = getEndOfFile(content, simpleName);

  const componentTsFileName = path.join(formSubDirName, conf.componentsDir, `${simpleName}.component.html`);
  writeFile(componentTsFileName, content, config.header, 'html');
}

export function getBeginingOfFile(content: string, submitFunctionName: string, name: string,
                                  simpleName: string) {
  content += '<mat-card>\n';
  content += indent(`<mat-card-title>${name}</mat-card-title>\n`);
  content += '\n';
  content = twoIndents(content, `<mat-card-content>\n`);
  content = threeIndents(content, `<div class='row'>\n`);
  content = fourIndents(content, `<div class='col-12'>\n`);
  content += '\n';
  content = fiveIndents(content,
      `<form [formGroup]='${simpleName}FormService.form' (ngSubmit)='${submitFunctionName}()' class='full-width'>\n`);
  content += '\n';
  return content;
}

export function getEndOfFile(content: string, simpleName: string) {
  content = fourIndents(content, '</form>\n');
  content += '\n';
  content = fourIndents(content, `<button mat-raised-button color='primary' type='submit' [disabled]='${simpleName}FormService.form.invalid'>\n`);
  content += '\n';
  content = threeIndents(content, '</div>\n');
  content = twoIndents(content, '</div>\n');
  content += indent('</mat-card-content>\n');
  content += '</mat-card>';
  return content;
}

export function getFieldDefinition(paramGroups: Parameter[], schemaObjectDefinitionsKeys: string[],
                                   schemaObjectDefinitions: ProcessedDefinition[], content: string) {
  const paramsArray: string[] = [];

  // checkbox, select or input
  for (const param of paramGroups) {

    if (schemaObjectDefinitionsKeys.includes(param.name.toLowerCase()) || param.name === 'data') {
      const name = getName(param);

      const objDef: ProcessedDefinition = schemaObjectDefinitions.find(
          obj => obj.name.toLowerCase() === name);

      const properties = objDef.def.properties;

      Object.entries(properties).forEach(([key, value]) => {
        const validators = getValidators(value);
        if (objDef.def.required.includes(key)) validators.push(
            {type: 'required', errorDescription: 'This field is required'});

        content = createFieldDefinition(content, key, validators);

        paramsArray.push(key);
      });
    } else {
      const validators = getValidators(param);
      if (param.required) validators.push({type: 'required', errorDescription: 'This field is required'});

      content = createFieldDefinition(content, param.name, validators);

      paramsArray.push(param.name);
    }
  }
  return {content, paramsArray};
}

function getName(param: Parameter): string {
  let name: string;
  if (param.name === 'data') {
    name = param.schema.$ref.split('#/definitions/')[1].toLowerCase();
  } else {
    name = param.name.toLowerCase();
  }
  return name;
}

export function createFieldDefinition(content: string, key: string, validators: Validator[]) {
  content = sixIndents(content, `<div class='row'>\n`);
  content = sevenIndents(content, `<div class='col-12'>\n`);
  content += '\n';
  content = eightIndents(content, `<mat-form-field class='account-form-full-width'>\n`);
  content = nineIndents(content, `<input matInput type='text' name='${key}' [formControl]='${key}' placeholder="${key}" />\n`);
  for (const validator of validators) {
    content = nineIndents(content,
        `<mat-error *ngIf="${key}.hasError('${validator.type}')">${validator.errorDescription}</mat-error>\n`);
  }
  content = eightIndents(content, '</mat-form-field>\n');
  content += '\n';
  content = sevenIndents(content, '</div>\n');
  content = sixIndents(content, '</div>\n');
  content += '\n';
  return content;
}

export function getValidators(param: Parameter | Schema): Validator[] {
  const validators: Validator[] = [];

  if (param.format && param.format === 'email') validators.push(
      {type: 'email', errorDescription: 'Email has invalid format'});
  if (param.maxLength) validators.push({type: 'maxLength', errorDescription: 'Maximum length exceeded'});
  if (param.minLength) validators.push({type: 'minLength', errorDescription: 'Too short'});
  if (param.pattern) validators.push({type: 'pattern', errorDescription: 'Value does not comply with rules'});

  return validators;
}

function twoIndents(content: string, value: string): string {
  content += indent(indent(`${value}`));
  return content;
}

function threeIndents(content: string, value: string): string {
  content += indent(indent(indent(`${value}`)));
  return content;
}

function fourIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(`${value}`))));
  return content;
}

function fiveIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(indent(`${value}`)))));
  return content;
}

function sixIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(indent(indent(`${value}`))))));
  return content;
}

function sevenIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(indent(indent(indent(`${value}`)))))));
  return content;
}

function eightIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(indent(indent(indent(indent(indent(`${value}`)))))))));
  return content;
}

function nineIndents(content: string, value: string): string {
  content += indent(indent(indent(indent(indent(indent(indent(indent(indent(indent(`${value}`))))))))));
  return content;
}
