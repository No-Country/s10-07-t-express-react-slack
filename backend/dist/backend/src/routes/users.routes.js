"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const register_1 = require("../services/crudUser/register");
const login_1 = require("../services/crudUser/login");
const recoverPassword_1 = require("../services/crudUser/recoverPassword");
const resetPassword_1 = require("../services/crudUser/resetPassword");
const loginGoogle_1 = require("../services/crudUser/loginGoogle");
const me_1 = require("../services/crudUser/me");
const authToken_1 = require("../middlewares/authToken");
const get_1 = require("../services/crudUser/get");
const put_1 = require("../services/crudUser/put");
const delete_1 = require("../services/crudUser/delete");
exports.usersRoutes = (0, express_1.Router)();
// ───Registrar Usuarios ────────────────────────────────────────────────────────────────
const USER = "/user";
exports.usersRoutes.post(`${USER}`, register_1.createUser);
const USERS = "/users";
exports.usersRoutes.get(`${USERS}`, get_1.allUsers);
// ───Actualizar Usuario ────────────────────────────────────────────────────────────────
const USER_UPDATE = "/user/:id";
exports.usersRoutes.put(`${USER_UPDATE}`, put_1.updateUser);
// ───Eliminar cuenta de Usuario ────────────────────────────────────────────────────────────────
const USER_DELETE = "/user/:id";
exports.usersRoutes.delete(`${USER_DELETE}`, delete_1.deleteUser);
// ─── Loguear Usuario ─────────────────────────────────────────────────────────
const LOGIN = "/auth";
exports.usersRoutes.post(`${LOGIN}`, login_1.loginUser);
// ─── Loguear Usuario Con Google ──────────────────────────────────────────────
const LOGINGOOGLE = "/authgoogle";
exports.usersRoutes.post(`${LOGINGOOGLE}`, loginGoogle_1.loginGoogle);
// ─── Recuperar Y Resetear Contraseña ─────────────────────────────────────────
const RECOVER_PASSWORD = "/recover-password";
exports.usersRoutes.post(`${RECOVER_PASSWORD}`, recoverPassword_1.recoverPassword);
const RESET_PASSWORD = "/reset-password/:id";
exports.usersRoutes.post(`${RESET_PASSWORD}`, resetPassword_1.resetPassword);
// ─── Middelware De Autenticacion ─────────────────────────────────────────────
const AUTH_TOKEN = "/authToken";
exports.usersRoutes.get(`${AUTH_TOKEN}`, authToken_1.authToken);
const ME = "/me";
exports.usersRoutes.get(`${ME}`, me_1.me);
