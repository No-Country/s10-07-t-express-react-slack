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
  console.log('Connected with socket')
  socket.on('message', (data: any) => {
    console.log(data)
    //socket.broadcast.emit('message', data)
    socket.broadcast.emit('message', data)
  })
})

server.listen(PORT, () => {
  console.log(`Listening on PORT:`, 3001)
  dbConexion
})
