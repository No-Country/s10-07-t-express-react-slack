"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    message: {
        type: String,
        require: true,
    },
    // from: {
    //   type: String,
    //   require: true,
    // },
    // workSpaceId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "WorkSpace",
    // },
    channelsId: {
        type: mongoose_1.Schema.Types.Array,
        // type: Schema.Types.ObjectId,
        // type: Schema.Types.ObjectId,
        ref: 'Channel',
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.MessageModel = (0, mongoose_1.model)('Message', messageSchema);
