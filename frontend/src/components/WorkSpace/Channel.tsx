import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IChannel } from './interfaces';
import { generateId } from './utils';
import { validateUser } from '../../redux/slices/user.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import axios from 'axios';

// Ejemplo de como implementar socket 
// https://github.com/CodenautaJorge/React-socketio-chat/blob/main/client/src/App.js

const socket = io('http://localhost:3001'); // Connect to the Socket.io server

const Channel = () => {
  const dispatch = useAppDispatch()
  const {_id} = useAppSelector((state) => state.user)
  // const idWorkspace = localStorage.getItem("workspaceId")
  // const idChannel = localStorage.getItem("idChannel")

  const [messages, setMessages] = useState<IChannel[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');

  useEffect(() => {
    dispatch(validateUser())
  }, [])

  useEffect(() => {
    // socket.on(`${idWorkspace}/${idChannel}`, (data) => {
    socket.on('message', (data) => {
      setMessages([data, ...messages]);
    });
  }, [messages]);

  const handleSendMessage = (): void => {
    // const response = await axios.post("http://localhost:3001/message", {
    //   nameWorkSpaceId: "64f7153d2b33ae2f5a92c67a",
    //   message: inputMessage,
    //   userId: "64f715232b33ae2f5a92c676",
    //   channelsId: "64f715702b33ae2f5a92c67d"
    // })

    // socket.emit(`${idWorkspace}/${idChannel}`, {
    socket.emit('message', {
      nameWorkSpaceId: "64f7153d2b33ae2f5a92c67a",
      message: inputMessage,
      userId: _id,
      channelsId: "64f715702b33ae2f5a92c67d"
    });

    //Añadimos el mensaje y el resto de mensajes enviados
    setMessages([{
      nameWorkSpaceId: "64f7153d2b33ae2f5a92c67a",
      message: inputMessage,
      userId: "64f715232b33ae2f5a92c676",
      channelsId: "64f715702b33ae2f5a92c67d"
    }, ...messages])
    setInputMessage('');
  };

  return (
    <section>
      <div>
        {messages.map((data) => (
          <div>
            <span className='bg-red-600 px-2 py-1 rounded-lg'>{data.userId}</span>
            <div key={generateId()}>{data.message}</div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </section>
  )
}
export default Channel;
