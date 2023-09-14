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
const Channels_1 = require("../../models/Channels");
const workSpace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workSpace = req.body;
    try {
        const validations = yield (0, workSpace_1.validateWorkSpace)(workSpace);
        const existWorkSpace = yield WorkSpace_1.WorkSpaceModel.findOne({ nameWorkSpace: validations.nameWorkSpace });
        if (existWorkSpace) {
            return res.status(401).json({ error: "Este espacio de trabajo ya existe" });
        }
        const newWorkSpace = yield WorkSpace_1.WorkSpaceModel.create({
            userId: workSpace.userId,
            nameWorkSpace: validations.nameWorkSpace,
            // fullName: workSpace.fullName
        });
        const defaultChannel = yield Channels_1.ChannelsModel.create({
            workSpaceId: newWorkSpace._id
        });
        yield defaultChannel.save();
        const channelPush = [];
        channelPush.push(defaultChannel._id);
        yield WorkSpace_1.WorkSpaceModel.updateOne({ _id: newWorkSpace._id }, { channelsId: channelPush });
        if (newWorkSpace) {
            return res.status(201).json({
                msg: "Se creo con exito el espacio de trabajo",
                data: newWorkSpace
            });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.workSpace = workSpace;
