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
exports.deleteWorkSpace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const deleteWorkSpace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workSpaceId = req.params.id;
    try {
        const workSpace = yield WorkSpace_1.WorkSpaceModel.findByIdAndDelete(workSpaceId);
        if (!workSpace) {
            return res.json({ error: "El espacio de trabajo no existe." });
        }
        return res.status(204).json({ msg: "Espacio eliminado." });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.deleteWorkSpace = deleteWorkSpace;
