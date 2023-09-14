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
exports.joinToWorkspace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const Users_1 = require("../../models/Users");
const joinToWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idWorkspace = req.params.idWorkspace;
    const idUser = req.params.idUser;
    try {
        const existWorkspace = yield WorkSpace_1.WorkSpaceModel.findById(idWorkspace);
        if (!existWorkspace) {
            return res.status(404).json({ error: "El espacio de trabajo no existe." });
        }
        const userId = yield Users_1.Usermodel.findOne({ _id: idUser });
        if (!userId) {
            return res.status(404).json({ error: "El email no está registrado." });
        }
        yield WorkSpace_1.WorkSpaceModel.updateOne({ _id: idWorkspace }, { $addToSet: { members: userId._id } });
        return res.status(200).json({ msg: "Usuario agregado al espacio de trabajo." });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.joinToWorkspace = joinToWorkspace;
