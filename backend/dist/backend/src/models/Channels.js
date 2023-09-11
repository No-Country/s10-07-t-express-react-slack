"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsModel = void 0;
const mongoose_1 = require("mongoose");
const channelsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: false,
        default: "General"
    },
    workSpaceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "WorkSpace",
    },
    messages: {
        // type: Schema.Types.ObjectId,
        type: mongoose_1.Schema.Types.Array,
        ref: "Message",
    },
}, {
    timestamps: false,
    versionKey: false,
});
exports.ChannelsModel = (0, mongoose_1.model)("Channel", channelsSchema);
