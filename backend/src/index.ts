require('dotenv').config();
import { app } from "./app";
import { dbConexion } from "./db";
const { PORT } = process.env;
import { createServer } from "http";
import { Server as SocketServer } from "socket.io"

const server = createServer(app);

const io = new SocketServer(server);

io.on("connection", (socket) => {
  console.log("Connected with socket");
  socket.on("message", (data: any) => {
    socket.broadcast.emit("message", data)
  })
});

server.listen(PORT, () => {
  console.log(`Listening on PORT:`, 3001);
  dbConexion;
});