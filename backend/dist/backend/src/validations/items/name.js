"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationName = exports.validationFullName = void 0;
const regex_1 = require("../../helper/regex");
const validationFullName = (name) => {
    if (!name.match(regex_1.fullName)) {
        throw new Error("Debes ingresar un nombre completo");
    }
    return name;
};
exports.validationFullName = validationFullName;
const validationName = (name) => {
    if (!name.match(regex_1.NameChannel)) {
        throw new Error("Debes ingresar un nombre valido");
    }
    return name;
};
exports.validationName = validationName;
