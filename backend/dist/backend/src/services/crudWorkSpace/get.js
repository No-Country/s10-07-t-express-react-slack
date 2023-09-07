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
exports.allWorkSpace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const allWorkSpace = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workSpace = yield WorkSpace_1.WorkSpaceModel.find();
        if (workSpace.length) {
            return res.json(workSpace);
        }
        return res.json({ msg: "No hay espacios de trabajo" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.allWorkSpace = allWorkSpace;
