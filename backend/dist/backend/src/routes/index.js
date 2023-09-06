"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_routes_1 = require("./users.routes");
const workSpace_routes_1 = require("./workSpace.routes");
exports.router = (0, express_1.Router)();
exports.router.use(users_routes_1.usersRoutes);
exports.router.use(workSpace_routes_1.channelsRoutes);
