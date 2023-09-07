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
exports.loginGoogle = void 0;
const Users_1 = require("../../models/Users");
const JwtToken_1 = require("../../helper/JwtToken");
const loginGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, loginGoogle, fullName, profileImage } = req.body;
    try {
        if (!email)
            throw new Error("El email es requerido.");
        const existUser = yield Users_1.Usermodel.findOne({ email });
        if (existUser && existUser.email) {
            const token = yield (0, JwtToken_1.generateToken)(existUser.email);
            return res.status(201).json({
                data: { message: "Usuario logueado con exito",
                    token }
            });
        }
        const newUser = new Users_1.Usermodel({
            fullName,
            email,
            loginGoogle,
            profileImage
        });
        yield newUser.save();
        const token = yield (0, JwtToken_1.generateToken)(newUser.email);
        if (newUser) {
            return res.status(201).json({
                message: "Usuario creado con exito",
                data: token
            });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.loginGoogle = loginGoogle;
