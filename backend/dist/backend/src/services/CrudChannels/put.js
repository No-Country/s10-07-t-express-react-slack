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
exports.updateChannel = void 0;
const Channels_1 = require("../../models/Channels");
const updateChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const channel_update = req.body;
    try {
        const channel = yield Channels_1.ChannelsModel.findByIdAndUpdate(req.params.idChannel, channel_update, { new: true });
        if (!channel) {
            return res.status(404).json({ error: "El canal no existe." });
        }
        return res.status(200).json({ msg: "Datos actualizados con éxito.", channel });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.updateChannel = updateChannel;
