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
exports.validateWorkSpace = void 0;
const name_1 = require("./items/name");
const validateWorkSpace = (workSpace) => __awaiter(void 0, void 0, void 0, function* () {
    if (!workSpace.nameWorkSpace) {
        throw new Error("Todos los campos son requeridos");
    }
    (0, name_1.validationName)(workSpace.nameWorkSpace);
    return workSpace;
});
exports.validateWorkSpace = validateWorkSpace;
