require('dotenv').config();
import { app } from "./app";
import { dbConexion } from "./db";
const { PORT } = process.env;
console.log("PORT:", PORT)
import { createServer } from "http";
import { Server as SocketServer } from "socket.io"

const server = createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("Connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data: any) => {
    console.log("DATA:", data)
  })
})

dbConexion().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT:`, 3001);
    console.log("MongoDb Conected is OK!!");
  });
});