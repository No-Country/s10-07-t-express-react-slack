"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsRoutes = void 0;
const express_1 = require("express");
const post_1 = require("../services/crudWorkSpace/post");
exports.channelsRoutes = (0, express_1.Router)();
const WORKSPACE = "/workSpace";
exports.channelsRoutes.post(`${WORKSPACE}`, post_1.workSpace);
