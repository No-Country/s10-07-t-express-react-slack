"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
require('dotenv').config();
const app_1 = require("./app");
const db_1 = require("./db");
const { PORT } = process.env;
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const server = (0, http_1.createServer)(app_1.app);
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    }
});
exports.io.on("connection", (socket) => {
    console.log("Connected with socket");
    socket.on("message", (data) => {
        socket.broadcast.emit("message", data);
    });
});
server.listen(PORT, () => {
    console.log(`Listening on PORT:`, 3001);
    db_1.dbConexion;
});
