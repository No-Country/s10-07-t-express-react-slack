"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsRoutes = void 0;
const express_1 = require("express");
const get_1 = require("../services/CrudChannels/get");
const post_1 = require("../services/CrudChannels/post");
const leaveChannel_1 = require("../services/CrudChannels/leaveChannel");
exports.channelsRoutes = (0, express_1.Router)();
// ─── Canales ─────────────────────────────────────────────────────────────────
const CHANNEL = "/channel";
exports.channelsRoutes.post(`${CHANNEL}`, post_1.channels);
const CHANNELS = "/channels";
exports.channelsRoutes.get(`${CHANNELS}`, get_1.allChannels);
const LEAVE_CHANNEL = "/channels/leave-channel/:idWorkspace/:idUser";
exports.channelsRoutes.post(`${LEAVE_CHANNEL}`, leaveChannel_1.leaveChannel);
