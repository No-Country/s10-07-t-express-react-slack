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
exports.channels = void 0;
const channel_1 = require("../../validations/channel");
const Channels_1 = require("../../models/Channels");
const WorkSpace_1 = require("../../models/WorkSpace");
const channels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const channel = req.body;
    const idWorkspace = req.params.idWorkspace;
    try {
        const validations = yield (0, channel_1.validateChannel)(channel);
        const workspace = yield WorkSpace_1.WorkSpaceModel.findById({
            _id: idWorkspace,
        })
            .populate("channelsId", ["name", "description", "_id"]);
        const existChannel = (_a = workspace === null || workspace === void 0 ? void 0 : workspace.channelsId) === null || _a === void 0 ? void 0 : _a.some((channel) => validations.name === channel.name);
        if (existChannel) {
            return res.status(400).json({ error: `El canal ya existe para el espacio de trabajo ${workspace === null || workspace === void 0 ? void 0 : workspace.nameWorkSpace}` });
        }
        const data = new Channels_1.ChannelsModel({
            workSpaceId: workspace === null || workspace === void 0 ? void 0 : workspace._id,
            name: channel.name,
            description: channel.description
        });
        yield data.save();
        const channelPush = [];
        channelPush.push(data._id);
        if (workspace === null || workspace === void 0 ? void 0 : workspace.channelsId) {
            const dataa = yield WorkSpace_1.WorkSpaceModel.findById({ _id: idWorkspace });
            yield WorkSpace_1.WorkSpaceModel.updateOne({ _id: idWorkspace }, { channelsId: [...dataa === null || dataa === void 0 ? void 0 : dataa.channelsId, ...channelPush] });
            if (dataa) {
                return res.status(201).json({
                    message: "Se creo con exito el Canal",
                    data: dataa
                });
            }
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.channels = channels;
