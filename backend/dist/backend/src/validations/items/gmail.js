"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationEmail = void 0;
const regex_1 = require("../../helper/regex");
const validationEmail = (gmail) => {
    if (!gmail) {
        throw new Error('Debe ingresar un correo');
    }
    if (!regex_1.emailRegex.test(gmail) || !regex_1.dominiosPermitidosRegex.test(gmail)) {
        throw new Error('Correo invalido vuelva a intentarlo');
    }
    return gmail;
};
exports.validationEmail = validationEmail;
