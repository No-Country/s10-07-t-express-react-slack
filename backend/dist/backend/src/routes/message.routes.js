"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = require("express");
const get_1 = require("../services/crudMessage/get");
const post_1 = require("../services/crudMessage/post");
exports.messageRoutes = (0, express_1.Router)();
// ─── Mensaje ─────────────────────────────────────────────────────────────────
const MESSAGE = "/message";
exports.messageRoutes.post(`${MESSAGE}`, post_1.createMessage);
const MESSAGES = "/messages";
exports.messageRoutes.get(`${MESSAGES}`, get_1.allMessages);
