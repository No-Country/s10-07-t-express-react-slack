import { FC } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'
import toolbar from '../../utils/toolbar'

interface IChatField {
  setRichText: (contenido: string) => void
}

const ChatField: FC<IChatField> = ({ setRichText }) => {
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let contenido = quill.root.innerHTML
    setRichText(contenido)
    quill.setContents('')
    //handleEmit(richText)
    //console.log(contenido)
  }

  return (
    <div>
      <h2>Nuevo mensaje</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div ref={quillRef}></div>
        <button
          className='uppercase bg-button-orange rounded-xl text-white font-semibold px-2 py-2 mt-1'
          type='submit'>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ChatField
