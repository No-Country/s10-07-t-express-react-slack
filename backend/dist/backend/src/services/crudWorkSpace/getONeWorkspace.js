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
exports.getOneWorkspace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const getOneWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const workSpace = yield WorkSpace_1.WorkSpaceModel.findById({ _id: id })
            .populate("members", ["profileImage", "fullName", "_id", "email"])
            .populate("channelsId", ["name", "_id"]);
        if (workSpace) {
            return res.json({ data: workSpace });
        }
        return res.json({ msg: "No existe el espacio de trabajo" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.getOneWorkspace = getOneWorkspace;
