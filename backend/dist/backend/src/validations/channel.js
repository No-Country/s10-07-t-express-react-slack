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
exports.validateChannel = void 0;
const name_1 = require("./items/name");
const validateChannel = (channel) => __awaiter(void 0, void 0, void 0, function* () {
    if (!channel.name) {
        throw new Error("Todos los campos son requeridos");
    }
    (0, name_1.validationName)(channel.name);
    return channel;
});
exports.validateChannel = validateChannel;
