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
exports.leaveChannel = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const Users_1 = require("../../models/Users");
const Channels_1 = require("../../models/Channels");
const leaveChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idChannel = req.params.idChannel;
    const idUser = req.params.idUser;
    try {
        const existChannel = yield Channels_1.ChannelsModel.findById(idChannel);
        if (!existChannel) {
            return res.status(404).json({ error: "El canal no existe." });
        }
        const userId = yield Users_1.Usermodel.findOne({ _id: idUser });
        if (!userId) {
            return res.status(404).json({ error: "El email no está registrado." });
        }
        yield WorkSpace_1.WorkSpaceModel.updateOne({ _id: idChannel }, { $pull: { members: userId._id } });
        return res.status(200).json({ msg: "Usuario retirado del canal." });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.leaveChannel = leaveChannel;
