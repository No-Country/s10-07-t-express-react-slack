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
exports.channels = void 0;
const channel_1 = require("../../validations/channel");
const Channels_1 = require("../../models/Channels");
const channels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = req.body;
    try {
        const validations = yield (0, channel_1.validateChannel)(channel);
        const existChannel = yield Channels_1.ChannelsModel.findOne({
            name: validations.name,
        });
        if (existChannel) {
            return res.status(400).json({ error: "El canal ya existe para el espacio de trabajo", existChannel });
        }
        const data = new Channels_1.ChannelsModel({
            workSpaceId: channel.workSpaceId,
            // messageId: channel.,
            name: channel.name
        });
        yield data.save();
        if (data) {
            return res.status(201).json({
                message: "Se creo con exito el Canal",
                data: data
            });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.channels = channels;
