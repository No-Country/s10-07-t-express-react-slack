import {FC} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import cohete from '../assets/Cohete 4.png'

enum Status {
  warning = "warning",
  success = "success",
  error = "error"
}

interface Props {
  hiddenAlert: boolean
  setHiddenAlert: (param:boolean) => void
  status: Status
  text: string
  title: string
}

const Alert: FC<Props> = ({hiddenAlert, setHiddenAlert, status, text, title}) => {
  return(
    <div
      className={`${hiddenAlert ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/5 shadow-xl rounded-lg p-4 bg-[#25254D] text-white flex flex-col gap-y-4 h-fit'>
        <div className="relative flex items-center justify-between">
          <div className='flex flex-col gap-y-3'>
            {title}
          </div>
          <button
            className='rounded-md text-3xl text-white absolute top-0 right-0'
            onClick={() => setHiddenAlert(!hiddenAlert)}>
            <AiOutlineClose className='' />
          </button>
        </div>
        <div>
          <img src={
            status === Status.warning ? 'warningImage' : status === Status.error ? "errorImage" : cohete
          } alt="" />
          <span>
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Alert;
