"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSpaceModel = void 0;
const mongoose_1 = require("mongoose");
const workSpaceSchema = new mongoose_1.Schema({
    nameWorkSpace: {
        type: String,
        require: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    channelsId: {
        type: mongoose_1.Schema.Types.Array,
        // type: Schema.Types.ObjectId,
        ref: "Channel",
    },
    members: {
        type: mongoose_1.Schema.Types.Array,
        ref: "User"
    }
}, {
    timestamps: false,
    versionKey: false,
});
exports.WorkSpaceModel = (0, mongoose_1.model)("WorkSpace", workSpaceSchema);
