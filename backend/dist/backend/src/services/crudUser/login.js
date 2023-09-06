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
exports.loginUser = void 0;
const Users_1 = require("../../models/Users");
const bcrypts_1 = require("../../helper/bcrypts");
const JwtToken_1 = require("../../helper/JwtToken");
const login_1 = require("../../validations/login");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const validation = yield (0, login_1.validateLogin)(user);
        const existUser = yield Users_1.Usermodel.findOne({ email: validation.email });
        if (!existUser) {
            return res.status(401).json({ error: "Esta cuenta no esta registrada" });
        }
        const passwordEncrypted = existUser.password;
        const comparePassword = yield (0, bcrypts_1.passwordCorrect)(validation.password, passwordEncrypted);
        if (comparePassword) {
            const token = yield (0, JwtToken_1.generateToken)(existUser.email);
            const data = {
                existUser,
                token,
            };
            return res.status(200).json({ msg: "Sesión y token válido", data });
        }
        else {
            return res.status(403).json({ error: "Contraseña invalida" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        console.log(error);
    }
});
exports.loginUser = loginUser;
