import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Options, OptionsEdit, Props } from '../DropdownEditWorkspace';
import { useAppSelector } from '../../../redux/hooks';
import axios from 'axios';


const EditChannels: FC<Props> = ({ state, setState }) => {

  const {channelsId} = useAppSelector(state => state.workspace)

  const showModal = () => {
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

  const deleteChannel = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3001/channel/${id}`)
      alert("se borro el canal exitosamente")
    } catch (error) {
      alert("no se puede eliminar el canal")
    }
  }

  return (
    <div
      className={`${state?.editChannels ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/5 shadow-xl rounded-lg p-8 bg-[#25254D] text-white flex flex-col gap-y-4 h-5/6 overflow-y-auto'>
        <div className="border-b border-b-white/30 pb-6 relative flex items-center justify-between">
          <div className='flex flex-col gap-y-3'>
            <span className='text-button-orange font-black text-3xl'>Administrar canales</span>
            <p className='text-sm'>Edita o elimina los canales de tu espacio de trabajo</p>
          </div>
          <button
            className='rounded-md text-3xl text-white absolute top-0 right-0'
            onClick={showModal}>
            <AiOutlineClose className='' />
          </button>
        </div>
        <h3 className='mb-4 text-button-orange text-2xl font-semibold'># Mis canales</h3>
        <div className='overflow-y-auto flex flex-col gap-y-4'>
          {
            channelsId.map((channel: any) => {
              return(
                <div key={channel._id} className='flex items-center justify-between rounded-md border border-white/20 p-3'>
                  <div >
                    <h3 className='font-semibold'># {channel.name}</h3>
                    <p className='text-[12px] font-thin'>{channel.description}</p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <button 
                    onClick={() => deleteChannel(channel._id)}
                    className='px-3 py-1 bg-red-600 rounded-md font-semibold'>Eliminar</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default EditChannels;
