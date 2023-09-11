"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usermodel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    loginGoogle: {
        type: Boolean,
        default: false,
        require: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    workSpace: {
        type: mongoose_1.Schema.Types.Array,
        ref: "WorkSpace",
    },
}, {
    timestamps: false,
    versionKey: false,
});
exports.Usermodel = (0, mongoose_1.model)("User", userSchema);
