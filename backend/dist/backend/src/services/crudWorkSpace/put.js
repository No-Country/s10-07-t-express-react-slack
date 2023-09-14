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
exports.putWorkSpace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const workSpace_1 = require("../../validations/workSpace");
const putWorkSpace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataWorkSpace = req.body;
    const idWorkSpace = req.params.id;
    try {
        const validations = yield (0, workSpace_1.validateWorkSpace)(dataWorkSpace);
        yield WorkSpace_1.WorkSpaceModel.findByIdAndUpdate(idWorkSpace, validations);
        return res.status(201).json({ msg: "Actualizado con éxito" });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.putWorkSpace = putWorkSpace;
