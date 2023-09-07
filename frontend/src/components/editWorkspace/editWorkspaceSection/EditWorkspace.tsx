import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Options, OptionsEdit, Props } from '../DropdownEditWorkspace';

const EditWorkspace: FC<Props> = ({ state, setState }) => {

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
      className={`${state?.editWorkspace ? 'hidden' : 'block'} bg-black/30 fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/5 shadow-xl rounded-lg p-8 bg-[#25254D] text-white flex flex-col gap-y-8 h-5/6 overflow-y-auto'>
        <div className="relative flex items-center justify-between">
          <div className='flex flex-col gap-y-3'>
            <span className='text-button-orange font-black text-3xl'>Editar espacio de trabajo</span>
            <p className='text-sm'>Personaliza tu espacio o cambia la configuración</p>
          </div>
          <button
            className='rounded-md text-4xl text-white absolute -top-3 -right-3'
            onClick={handleClick}>
            <AiOutlineClose className='' />
          </button>
        </div>
        <div className='p-0 border-b border-b-white w-full flex items-center justify-start'>
          <div className='px-3 py-2 border-b-4 border-b-button-orange font-semibold text-button-orange'>
            Nombre Workspace
          </div>
        </div>
        <span className='text-button-orange font-semibold'>Información de tu espacio</span>
        <div className='w-2/5 flex flex-col gap-y-8'>
          <div className='flex flex-col '>
            <label className='text-sm font-semibold'>Nombre</label>
            <input type="text" className='text-sm rounded-[4px] text-black/70 px-2 py-1' value={"Nombre workspace"}/>
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className='text-white font-semibold'>¿Deseas eliminar este espacio de trabajo?</span>
            <div className='flex flex-col gap-y-1'>
              <button className='rounded-[4px] bg-red-600 font-semibold text-sm px-8 py-2'>Eliminar</button>
              <span className='font-thin text-[12px]'>Ten en cuenta que esta acción no puede ser revertida.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditWorkspace;
