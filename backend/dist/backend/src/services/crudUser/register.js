"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const Users_1 = require("../../models/Users");
const bcrypts_1 = require("../../helper/bcrypts");
const register_1 = require("../../validations/register");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const validations = (0, register_1.validateRegister)(user);
        const existUser = yield Users_1.Usermodel.findOne({
            email: validations.email,
        });
        if (existUser) {
            return res.status(400).json({ error: "El usuario ya existe", existUser });
        }
        const encrypted = yield (0, bcrypts_1.hashedPassword)(validations.password);
        const newUser = new Users_1.Usermodel({
            fullName: validations.fullName,
            email: validations.email,
            password: encrypted,
        });
        yield newUser.save();
        if (newUser) {
            return res.status(201).json({
                message: "Usuario creado con exito",
                newUser
            });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.createUser = createUser;
