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
exports.workSpace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const workSpace_1 = require("../../validations/workSpace");
// import { hashedPassword } from '../../helper/bcrypts';
// import { validateRegister } from "../../validations/register";
const workSpace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workSpace = req.body;
    try {
        const validations = yield (0, workSpace_1.validateWorkSpace)(workSpace);
        const allSpace = yield WorkSpace_1.WorkSpaceModel.findOne({
            emailWorkSpace: validations.emailWorkSpace
        });
        if (allSpace) {
            return res.status(400).json({ error: " No hay ningun espacio de trabajo", allSpace });
        }
        const newWorkSpace = new WorkSpace_1.WorkSpaceModel({
            nameWorkSpace: validations.nameWorkSpace,
            channels: validations.channels,
            emailWorkSpace: validations.emailWorkSpace
        });
        yield newWorkSpace.save();
        if (newWorkSpace) {
            return res.status(201).json({ message: "Se creo con exito el espacio de trabajo" });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.workSpace = workSpace;
