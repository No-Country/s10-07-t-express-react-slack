import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Options, OptionsEdit, Props } from '../DropdownEditWorkspace';


const EditChannels: FC<Props> = ({ state, setState }) => {

  const handleClick = () => {
    setState((prevState: OptionsEdit) => {
      const updatedState: OptionsEdit = {};

      for (const key in prevState) {
        if (prevState.hasOwnProperty(key)) {
          const typedKey: Options = Options[key as keyof typeof Options];
          if (typedKey) {
            updatedState[typedKey] = true;
          }
        }
      }

      return updatedState;
    })
  }

  return (
    <div
      className={`${state?.editChannels ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/3 shadow-xl rounded-lg px-6 py-4 bg-slate-100 text-black flex flex-col gap-y-8 h-2/3 overflow-y-auto'>
        <div className="relative flex items-center justify-between border-b pb-2">
          <span className='self-center font-semibold'>Administrar canales</span>
          <button
            className='p-1 rounded-md bg-red-600 text-white hover:bg-red-700'
            onClick={handleClick}>
            <AiOutlineClose className='' />
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditChannels;
