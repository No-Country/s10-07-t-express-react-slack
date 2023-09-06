"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSpaceModel = void 0;
const mongoose_1 = require("mongoose");
const workSpaceSchema = new mongoose_1.Schema({
    nameWorkSpace: {
        type: String,
        require: true
    },
    count: {
        type: Number,
    },
    emailWorkSpace: {
        type: String,
        require: true
    },
    channels: {
        type: String,
        require: true
    },
    user: {
        type: mongoose_1.Schema.Types.Array,
        ref: "User"
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.WorkSpaceModel = (0, mongoose_1.model)("WorkSpace", workSpaceSchema);
