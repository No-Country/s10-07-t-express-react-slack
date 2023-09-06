"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const gmail_1 = require("./items/gmail");
const password_1 = require("./items/password");
const name_1 = require("./items/name");
const validateRegister = (user) => {
    if (!user.fullName && !user.password && !user.email) {
        throw new Error("Todos los campos son requeridos");
    }
    (0, name_1.validationFullName)(user.fullName);
    (0, gmail_1.validationEmail)(user.email);
    (0, password_1.validationPassword)(user.password);
    if ((0, password_1.validationPassword)(user.password) !== user.confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
    }
    return user;
};
exports.validateRegister = validateRegister;
