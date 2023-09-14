"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsRoutes = void 0;
const express_1 = require("express");
const get_1 = require("../services/CrudChannels/get");
const post_1 = require("../services/CrudChannels/post");
const leaveChannel_1 = require("../services/CrudChannels/leaveChannel");
const delete_1 = require("../services/CrudChannels/delete");
const getOne_1 = require("../services/CrudChannels/getOne");
const put_1 = require("../services/CrudChannels/put");
exports.channelsRoutes = (0, express_1.Router)();
// ─── Canales ─────────────────────────────────────────────────────────────────
const CHANNEL = "/channel/:idWorkspace";
exports.channelsRoutes.post(`${CHANNEL}`, post_1.channels);
const CHANNELS = "/channels";
exports.channelsRoutes.get(`${CHANNELS}`, get_1.allChannels);
const LEAVE_CHANNEL = "/channels/leave-channel/:idWorkspace/:idUser";
exports.channelsRoutes.post(`${LEAVE_CHANNEL}`, leaveChannel_1.leaveChannel);
const DELETE_CHANNEL = "/channel/:idChannel";
exports.channelsRoutes.delete(`${DELETE_CHANNEL}`, delete_1.deleteChannel);
const ONE_CHANNEL = "/channels/:idChannel";
exports.channelsRoutes.get(`${ONE_CHANNEL}`, getOne_1.getOneChannel);
const UPDATE_CHANNEL = "/channels/:idChannel";
exports.channelsRoutes.put(`${UPDATE_CHANNEL}`, put_1.updateChannel);
