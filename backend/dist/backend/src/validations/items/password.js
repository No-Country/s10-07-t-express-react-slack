"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationPassword = void 0;
const regex_1 = require("../../helper/regex");
const validationPassword = (password) => {
    if (!regex_1.regexPassword.test(password)) {
        throw new Error('Debe ingresar una contraseña que contenta 8 caracteres incluyendo: Mayuscula, minuscula, numero y un caracter especial(@, $, !, %, *, ?, _ , -, &)');
    }
    return password;
};
exports.validationPassword = validationPassword;
