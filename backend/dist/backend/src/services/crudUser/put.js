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
exports.updateUser = void 0;
const Users_1 = require("../../models/Users");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const user = yield Users_1.Usermodel.findByIdAndUpdate(req.params.id, userData);
        if (!user) {
            return res.json({ error: "El usuario no existe." });
        }
        return res.json({ msg: "Datos actualizados con éxito." });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.updateUser = updateUser;
