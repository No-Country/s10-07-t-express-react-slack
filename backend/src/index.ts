require('dotenv').config()
import { app } from './app'
import { dbConexion } from './db'
const { PORT } = process.env
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'

const server = createServer(app)

export const io = new SocketServer(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('Connected with Socket')
  socket.on('joinChannel', (channel, fullName) => {
    socket.join(channel)
    console.log(`el usuario ${fullName} se unio a la sala ${channel}`)
  })
  socket.on('message', (data: any) => {
    console.log(data)
    //socket.broadcast.emit('message', data)
    socket.broadcast.to(data.channelsId).emit('message', data)
  })
})

server.listen(PORT, () => {
  console.log(`Listening on PORT:`, 3001)
  dbConexion
})
