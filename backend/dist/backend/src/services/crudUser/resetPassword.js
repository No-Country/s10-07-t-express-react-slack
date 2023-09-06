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
exports.resetPassword = void 0;
const Users_1 = require("../../models/Users");
const bcrypts_1 = require("../../helper/bcrypts");
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = req.body.newPassword;
        const { id } = req.params;
        //const existUser = await Usermodel.findOne({email : req.body?.email});
        const existUser = yield Users_1.Usermodel.findById(id);
        if (!existUser) {
            res.status(404).json({ error: "El correo no está registrado." });
        }
        const encrypted = yield (0, bcrypts_1.hashedPassword)(password);
        yield Users_1.Usermodel.findByIdAndUpdate({ _id: id }, { password: encrypted });
        return res.status(201).send({ msg: "Contraseña actualizada exitosamente ...!" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.resetPassword = resetPassword;
