import { FC, useState } from 'react'
//import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
//import toolbar from '../../utils/toolbar'
import {AiOutlineSend} from 'react-icons/ai'
interface IChatField {
  setRichText: (contenido: string) => void
}

const ChatField: FC<IChatField> = ({ setRichText }) => {
  //const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const [texto, setTexto] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //let contenido = quill.root.innerHTML
    if(texto.length){
      setRichText(texto)
      setTexto('')
    }

    return
    //quill.setContents('')
  }

  return (
    <div className='w-full'>
      {/* <h2>Nuevo mensaje</h2> */}
      <form 
      className='w-full relative py-2'
      onSubmit={handleSubmit}>
        
        <input
          type='text'
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className='w-full px-2 py-3 border-2 border-black/30 rounded-md'
          placeholder='Envia un mensaje'
        />
        {/* <div ref={quillRef}></div> */}
        <button
          className={`${!texto.length && 'hover:cursor-auto'} bg-button-orange text-white hover:cursor-pointer absolute right-2 top-4 rounded-md p-1.5 text-2xl`}
          type='submit'>
          <AiOutlineSend/>
        </button>
      </form>
    </div>
  )
}

export default ChatField
