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
    },
});
exports.io.on('connection', (socket) => {
    console.log('pasa 1 vez');
    console.log('Connected with Socket');
    socket.on('joinChannel', (channel, fullName) => {
        socket.join(channel);
        console.log(`el usuario ${fullName} se unio a la sala ${channel}`);
    });
    socket.on('message', (data) => {
        console.log(data);
        //socket.broadcast.emit('message', data)
        socket.broadcast.to(data.channelsId).emit('message', data);
    });
});
server.listen(PORT, () => {
    console.log(`Listening on PORT:`, 3001);
    db_1.dbConexion;
});
