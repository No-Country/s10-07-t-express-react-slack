import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { IChannel } from './interfaces'
import { generateId } from './utils'
import { validateUser } from '../../redux/slices/user.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import rightArrow from '../../assets/rightArrow.svg'
import { AiOutlinePlus } from 'react-icons/ai'
import ChatField from './ChatField'
import { useQuill } from 'react-quilljs'

// Ejemplo de como implementar socket
// https://github.com/CodenautaJorge/React-socketio-chat/blob/main/client/src/App.js

const socket = io('http://localhost:3001') // Connect to the Socket.io server

const Channel = () => {
  const dispatch = useAppDispatch()
  const { _id, fullName } = useAppSelector((state) => state.user)
  const workspace = useAppSelector((state) => state.workspace)
  const [messages, setMessages] = useState<IChannel[]>([])
  const [richText, setRichText] = useState<string>('')
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false },
  })

  useEffect(() => {
    dispatch(validateUser())
  }, [])

  useEffect(() => {
    quill?.setContents(richText)
    //socket.emit('message', richText)
    // channelData = {
    //   ...channelData,
    //   message: richText,
    // }
    //setChannelData({ ...channelData, message: richText })
    if (richText.length) {
      setMessages((prev) => [
        ...prev,
        {
          nameWorkSpaceId: workspace._id,
          userId: _id,
          message: richText,
        },
      ])
    }
  }, [richText])

  useEffect(() => {
    console.log(messages)
    socket.emit('message')
  }, [messages])

  return (
    <section className='mt-20 py-8 px-12 w-2/3 h-screen flex flex-col items-center justify-between'>
      <div className='w-full flex flex-col gap-y-4'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center font-semibold gap-x-3 text-2xl'>
            <span className='text-button-orange text-3xl'>Canales</span>
            <img src={rightArrow} className='w-3' />
            <span className='text-[#828282]'>#Nombre Canal</span>
          </div>
          <button className='text-black flex items-center gap-x-2'>
            <div className=''>
              <AiOutlinePlus />
            </div>
            <span>Añadir descripcion</span>
          </button>
        </div>
        <div className='w-full flex flex-col gap-y-4'>
          <div className='h-[1px] bg-[#656464]/40 w-full'></div>
          <button className='text-black flex items-center gap-x-2'>
            <div className=''>
              <AiOutlinePlus />
            </div>
            <span>Añadir enlaces</span>
          </button>
          <div className='h-[1px] bg-[#656464]/40 w-full'></div>
        </div>
      </div>
      <div className='w-full'>
        {messages?.map((data) => (
          <div key={generateId()} className='flex gap-x-4'>
            <img
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              className='w-16 h-16'
              alt=''
            />
            <div className='flex flex-col gap-y-4'>
              <span className='font-semibold text-xl text-[#555454]/80'>
                {fullName}
              </span>
              <div
                dangerouslySetInnerHTML={{ __html: data.message || '' }}
                className='car-body'></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ChatField setRichText={setRichText} />
      </div>
      {/* <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className='border border-black'
        />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
    </section>
  )
}
export default Channel
