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
exports.deleteChannel = void 0;
const Channels_1 = require("../../models/Channels");
const WorkSpace_1 = require("../../models/WorkSpace");
const deleteChannel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = req.params.idChannel;
    try {
        const channel1 = yield Channels_1.ChannelsModel.findById(channel);
        // const workspace = await WorkSpaceModel.find({ channelsId: { $eq: channel } } )
        if (channel1) {
            yield WorkSpace_1.WorkSpaceModel.updateOne({ _id: channel1.workSpaceId }, { $pull: { channelsId: channel1._id } });
            yield Channels_1.ChannelsModel.findByIdAndDelete(channel);
            //await WorkSpaceModel.updateOne({_id: workspace._id},{$pull: {channelsId: channel}})
            return res.status(201).json({ msg: "Canal eliminado." });
        }
        return res.status(400).json({ error: "El canal no existe." });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.deleteChannel = deleteChannel;
