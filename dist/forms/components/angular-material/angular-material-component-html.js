"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const utils_1 = require("../../../utils");
const conf = require("../../../conf");
function createComponentHTML(config, name, paramGroups, schemaObjectDefinitions, formSubDirName, simpleName) {
    const schemaObjectDefinitionsKeys = schemaObjectDefinitions.map(s => s.name.toLowerCase());
    const submitFunctionName = `${name.toLowerCase()}`;
    let content = '';
    content = getBeginingOfFile(content, submitFunctionName, name, simpleName);
    const fieldDefinition = getFieldDefinition(paramGroups, schemaObjectDefinitionsKeys, schemaObjectDefinitions, content);
    content = fieldDefinition.content;
    content = getEndOfFile(content, simpleName);
    const componentTsFileName = path.join(formSubDirName, conf.componentsDir, `${simpleName}.component.html`);
    utils_1.writeFile(componentTsFileName, content, config.header, 'html');
}
exports.createComponentHTML = createComponentHTML;
function getBeginingOfFile(content, submitFunctionName, name, simpleName) {
    content += '<mat-card>\n';
    content += utils_1.indent(`<mat-card-title>${name}</mat-card-title>\n`);
    content += '\n';
    content = twoIndents(content, `<mat-card-content>\n`);
    content = threeIndents(content, `<div class='row'>\n`);
    content = fourIndents(content, `<div class='col-12'>\n`);
    content += '\n';
    content = fiveIndents(content, `<form [formGroup]='${simpleName}FormService.form' (ngSubmit)='${submitFunctionName}()' class='full-width'>\n`);
    content += '\n';
    return content;
}
exports.getBeginingOfFile = getBeginingOfFile;
function getEndOfFile(content, simpleName) {
    content = fourIndents(content, '</form>\n');
    content += '\n';
    content = fourIndents(content, `<button mat-raised-button color='primary' type='submit' [disabled]='${simpleName}FormService.form.invalid'>\n`);
    content += '\n';
    content = threeIndents(content, '</div>\n');
    content = twoIndents(content, '</div>\n');
    content += utils_1.indent('</mat-card-content>\n');
    content += '</mat-card>';
    return content;
}
exports.getEndOfFile = getEndOfFile;
function getFieldDefinition(paramGroups, schemaObjectDefinitionsKeys, schemaObjectDefinitions, content) {
    const paramsArray = [];
    // checkbox, select or input
    for (const param of paramGroups) {
        if (schemaObjectDefinitionsKeys.includes(param.name.toLowerCase())) {
            const objDef = schemaObjectDefinitions.find(obj => obj.name.toLowerCase() === param.name.toLowerCase());
            const properties = objDef.def.properties;
            Object.entries(properties).forEach(([key, value]) => {
                const validators = getValidators(value);
                if (objDef.def.required.includes(key))
                    validators.push({ type: 'required', errorDescription: 'This field is required' });
                content = createFieldDefinition(content, key, validators);
                paramsArray.push(key);
            });
        }
        else {
            const validators = getValidators(param);
            if (param.required)
                validators.push({ type: 'required', errorDescription: 'This field is required' });
            content = createFieldDefinition(content, param.name, validators);
            paramsArray.push(param.name);
        }
    }
    return { content, paramsArray };
}
exports.getFieldDefinition = getFieldDefinition;
function createFieldDefinition(content, key, validators) {
    content = sixIndents(content, `<div class='row'>\n`);
    content = sevenIndents(content, `<div class='col-12'>\n`);
    content += '\n';
    content = eightIndents(content, `<mat-form-field class='account-form-full-width'>\n`);
    content = nineIndents(content, `<input matInput type='text' name='${key}' [formControl]='${key}' placeholder="${key}" />\n`);
    for (const validator of validators) {
        content = nineIndents(content, `<mat-error *ngIf="${key}.hasError('${validator.type}')">${validator.errorDescription}</mat-error>\n`);
    }
    content = eightIndents(content, '</mat-form-field>\n');
    content += '\n';
    content = sevenIndents(content, '</div>\n');
    content = sixIndents(content, '</div>\n');
    content += '\n';
    return content;
}
exports.createFieldDefinition = createFieldDefinition;
function getValidators(param) {
    const validators = [];
    if (param.format && param.format === 'email')
        validators.push({ type: 'email', errorDescription: 'Email has invalid format' });
    if (param.maxLength)
        validators.push({ type: 'maxLength', errorDescription: 'Maximum length exceeded' });
    if (param.minLength)
        validators.push({ type: 'minLength', errorDescription: 'Too short' });
    if (param.pattern)
        validators.push({ type: 'pattern', errorDescription: 'Value does not comply with rules' });
    return validators;
}
exports.getValidators = getValidators;
function twoIndents(content, value) {
    content += utils_1.indent(utils_1.indent(`${value}`));
    return content;
}
function threeIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(`${value}`)));
    return content;
}
function fourIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`))));
    return content;
}
function fiveIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`)))));
    return content;
}
function sixIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`))))));
    return content;
}
function sevenIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`)))))));
    return content;
}
function eightIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`)))))))));
    return content;
}
function nineIndents(content, value) {
    content += utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(utils_1.indent(`${value}`))))))))));
    return content;
}
//# sourceMappingURL=angular-material-component-html.js.map