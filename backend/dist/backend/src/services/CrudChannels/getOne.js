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
exports.getOneChannel = void 0;
const Channels_1 = require("../../models/Channels");
const Message_1 = require("../../models/Message");
const getOneChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const channel = yield Channels_1.ChannelsModel.findById(req.params.idChannel).populate('messages', ['message', 'nameWorkSpaceId', 'userId', 'channelsId']);
        const messages = yield Message_1.MessageModel.find({
            channelsId: req.params.idChannel,
        }).populate('userId', ['fullName']).sort({ createdAt: -1 });
        if (channel) {
            const data = {
                channel: channel,
                messages: messages
            };
            return res.status(200).json(data);
        }
        return res.status(404).json({ msg: 'El canal no existe' });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.getOneChannel = getOneChannel;
