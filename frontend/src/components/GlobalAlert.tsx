import {FC} from 'react'
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineExclamation, AiOutlineWarning } from 'react-icons/ai'
import { FaWindowClose } from 'react-icons/fa'

export enum Status {
  warning = "warning",
  success = "success",
  error = "error"
}

export interface StateAlert {
  status?: Status
  text?: string
  title?: string
}

interface Props {
  hiddenAlert: boolean
  setHiddenAlert: (param:boolean) => void
  status?: Status
  text?: string
  title?: string
}

const Alert: FC<Props> = ({hiddenAlert, setHiddenAlert, status, text, title}) => {
  return(
    <div
      className={`${hiddenAlert ? 'hidden' : 'block'} fixed w-full h-screen flex items-center bg-black/40 justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className={`${status === Status.warning ? 'bg-button-orange' : status === Status.error ? "bg-red-600" : 'bg-green-700'} fixed w-2/5 shadow-xl rounded-lg p-4 text-white flex flex-col gap-y-8 h-fit`}>
        <div className="relative flex items-center justify-between border-b border-b-white/30 pb-3">
          <div className='flex text-2xl font-black'>
            {title}
            {
              status === Status.warning ? 
              <div className='text-red-700 text-3xl'><AiOutlineExclamation/></div> : 
              status === Status.error ? 
              <div className='text-red-700 text-3xl'><AiOutlineExclamation/></div> : 
              ''
            }
          </div>
          <button
            className='rounded-md text-2xl text-white absolute top-0 right-0'
            onClick={() => setHiddenAlert(!hiddenAlert)}>
            <AiOutlineClose className='' />
          </button>
        </div>
        <div className='w-full flex items-center justify-between gap-x-20'>
          <span className='w-3/4 font-semibold'>
            {text}
          </span>
          {
            status === Status.warning ? <div className='w-2/5 text-white text-8xl text-center'><AiOutlineWarning/></div> : status === Status.error ? <div className='w-2/5 text-white text-8xl text-center'><FaWindowClose/></div>  : 
            <div className='w-2/5 text-white text-8xl text-center'><AiOutlineCheckCircle/></div>
          }
        </div>
      </div>
    </div>
  )
}
export default Alert;
