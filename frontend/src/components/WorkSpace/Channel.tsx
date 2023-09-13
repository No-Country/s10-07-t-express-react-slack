import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { generateId } from './utils'
import { useAppSelector } from '../../redux/hooks'
import rightArrow from '../../assets/rightArrow.svg'
import { AiOutlinePlus } from 'react-icons/ai'
import ChatField from './ChatField'
import { useQuill } from 'react-quilljs'
import axios from 'axios'
import './channel.css'

const socket = io('https://slack-clone-93lk.onrender.com')

const Channel = () => {
  const { _id, fullName, profileImage } = useAppSelector((state) => state.user)
  const channel = useAppSelector((state) => state.channel)
  const workspace = useAppSelector((state) => state.workspace)
  const [messages, setMessages] = useState<any[]>([])
  const [richText, setRichText] = useState<string>('')
  const [storedMessages, setStoredMessages] = useState<any>([])

  const { quill } = useQuill({
    readOnly: true,
    modules: { toolbar: false },
  })

  useEffect(() => {
    console.log(channel)

    setStoredMessages(channel.messages)
  }, [channel.messages])

  useEffect(() => {
    socket.emit('joinChannel', channel._id, fullName)
    socket.on('message', (message) => {
      if (message.channelsId === channel._id) {
        console.log(message)
        reciveMessage(message)
      }
    })
    setMessages([
      { nameWorkSpaceId: '', userId: '', message: '', channelsId: '' },
    ])
    return () => {
      socket.off('message', reciveMessage)
    }
  }, [channel._id])

  useEffect(() => {
    quill?.setContents(richText)
    if (richText.length) {
      const newMessage = {
        nameWorkSpaceId: workspace._id,
        userId: { _id, fullName, profileImage },
        message: richText,
        channelsId: channel._id,
      }
      socket.emit('message', newMessage)
      reciveMessage(newMessage)
      postMessages(newMessage)
    }
  }, [richText])
  const postMessages = async (data: any) => {
    try {
      const allMessages = await axios.post(
        'https://slack-clone-93lk.onrender.com/message',
        data,
      )
      console.log(allMessages.data)
    } catch (error) {
      console.log(error)
    }
  }

  const reciveMessage = (message: any) => {
    setMessages((prev) => [...prev, message])
  }

  const getFecha = (fechaProp: any) => {
    let dia = fechaProp.getDate()
    let mes = fechaProp.getMonth() + 1
    let año = fechaProp.getFullYear()
    let hora = fechaProp.getHours() + ':' + fechaProp.getMinutes()
    let fecha = `${dia}/${mes}/${año} - ${hora}`
    return fecha
  }

  return (
    <section className='mt-20 py-8 px-12 w-2/3 h-screen flex flex-col items-center justify-between'>
      <div className='w-full flex flex-col gap-y-4'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center font-semibold gap-x-3 text-2xl'>
            <span className='text-button-orange text-3xl'>Canales</span>
            <img src={rightArrow} className='w-3' />
            <span className='text-[#828282]'>#{channel.name}</span>
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
      <div className='overflow-y-auto w-full'>
        {storedMessages?.map(
          (storedMessage: any) =>
            storedMessage.message && (
              <div
                key={generateId()}
                className={`flex mb-4 border-b-2 justify-start ${
                  storedMessage.userId._id === _id ? '' : 'flex-row-reverse'
                }`}>
                {storedMessage.userId.profileImage.length ? (
                  <div className='flex'>
                    <img
                      src={storedMessage.userId.profileImage}
                      className='w-16 h-16 me'
                      alt=''
                    />
                  </div>
                ) : (
                  <div
                    className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-16 h-16 uppercase font-semibold`}>
                    <span>
                      {storedMessage.userId.fullName &&
                      storedMessage.userId.fullName.split(' ')[0]
                        ? storedMessage.userId.fullName.split(' ')[0][0]
                        : ''}
                      {storedMessage.userId.fullName &&
                      storedMessage.userId.fullName.split(' ')[1]
                        ? storedMessage.userId.fullName.split(' ')[1][0]
                        : ''}
                    </span>
                  </div>
                )}
                <div className='flex flex-col gap-y-2 mx-1'>
                  <div className='flex flex-col gap-x-10 content-start'>
                    <div className='flex font-semibold text-xl text-[#555454]/80'>
                      {storedMessage.userId._id === _id
                        ? fullName
                        : storedMessage.userId.fullName}
                    </div>

                    <div className='flex text-sm'>
                      {getFecha(new Date(storedMessage.createdAt))}
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: storedMessage.message || '',
                    }}
                    className='container-richText'></div>
                </div>
              </div>
            ),
        )}
        {messages?.map(
          (data) =>
            data.message && (
              <div
                key={generateId()}
                className={`flex mb-4 border-b-2 justify-start ${
                  data.userId._id === _id ? '' : 'flex-row-reverse'
                }`}>
                {data.userId.profileImage?.length ? (
                  <img
                    src={data.userId.profileImage}
                    className='w-16 h-16'
                    alt=''
                  />
                ) : (
                  <div
                    className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-16 h-16 uppercase font-semibold`}>
                    <span>
                      {data.userId.fullName &&
                      data.userId.fullName.split(' ')[0]
                        ? data.userId.fullName.split(' ')[0][0]
                        : ''}
                      {data.userId.fullName &&
                      data.userId.fullName.split(' ')[1]
                        ? data.userId.fullName.split(' ')[1][0]
                        : ''}
                    </span>
                  </div>
                )}

                <div className='flex flex-col gap-y-2 mx-1'>
                  <div className='flex flex-col gap-x-10 content-start'>
                    <div className='font-semibold text-xl text-[#555454]/80'>
                      {data.userId._id === _id
                        ? fullName
                        : data.userId.fullName}
                    </div>
                    <div className='text-sm pt-1'>{getFecha(new Date())}</div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: data.message || '' }}
                    className='container-richText'></div>
                </div>
              </div>
            ),
        )}
      </div>
      <div>
        <ChatField setRichText={setRichText} />
      </div>
    </section>
  )
}
export default Channel
