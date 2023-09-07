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
exports.allMessages = void 0;
const Message_1 = require("../../models/Message");
// import { IMessage } from "../../../../interface/IMessage";
const allMessages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield Message_1.MessageModel.find();
        if (messages) {
            return res.json(messages);
        }
        return res.json({ message: "No hay mensaje" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.allMessages = allMessages;
