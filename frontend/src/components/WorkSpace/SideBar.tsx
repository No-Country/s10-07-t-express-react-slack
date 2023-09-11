import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import DropdownEditWorkspace, { OptionsEdit } from '../editWorkspace/DropdownEditWorkspace';
import EditWorkspace from '../editWorkspace/editWorkspaceSection/EditWorkspace';
import EditChannels from '../editWorkspace/editChannelsSection/EditChannels';
import CreateChannel from '../channels/CreateChannels';

import { AiOutlineMessage, AiOutlinePlus } from 'react-icons/ai'
import { FaHashtag } from 'react-icons/fa'
import rightArrow from '../../assets/rightArrow.svg'
import bottomArrow from '../../assets/bottomArrow.svg'
import { getChannel } from '../../redux/slices/channel.slice';

const SideBar = () => {

  const [editOptions, setEditOptions] = useState<OptionsEdit>({
    editWorkspace: true,
    editUsers: true,
    editChannels: true
  })
  const [dropdownChannels, setDropdownChannels] = useState<boolean>(false)
  const [hiddenAlertChannel, setHiddenAlertChannel] = useState<boolean>(true)
  const [channelClicked, setChannelClicked] = useState<any>({})
  
  const dispatch = useAppDispatch()
  const { channelsId, nameWorkSpace, _id } = useAppSelector(state => state.workspace)
  const stateChannel = useAppSelector(state => state.channel)

  useEffect(() => {
    setChannelClicked(channelsId[0])
    dispatch(getChannel(channelsId[0]))
  }, [])

  return (
    <nav className='h-screen mt-20 bg-[#292956] text-button-orange flex flex-col gap-y-8 px-8 py-12 w-1/3'>
      <div className='w-full flex items-center justify-between'>
        <span className='text-2xl font-semibold'>{nameWorkSpace}</span>
        <DropdownEditWorkspace setState={setEditOptions} />
      </div>
      <div className='flex flex-col gap-y-4'>
        <div className='flex items-center gap-x-4'>
          <div className='text-xl'>
            <AiOutlineMessage />
          </div>
          <div className='flex items-center gap-x-2'>
            <span className='py-2 border-b border-b-white'>Hilos de conversaciones</span>
            <img src={rightArrow} />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={() => { setDropdownChannels(!dropdownChannels) }}
            className='flex items-center gap-x-4'>
            <div className='text-xl'>
              <FaHashtag />
            </div>
            <div className='flex items-center gap-x-2'>
              <span className='py-2 border-b border-b-white'>Canales</span>
              <img src={dropdownChannels ? bottomArrow : rightArrow} />
            </div>
          </button>
          <button
            onClick={() => setHiddenAlertChannel(false)}
            className='text-2xl bg-slate-100/5 hover:bg-slate-100/10 p-1 rounded-lg'>
            <AiOutlinePlus />
          </button>
        </div>
        <div className={`${dropdownChannels ? 'flex' : 'hidden'} flex-col ml-8 w-full gap-y-4`}>
          {
            channelsId.map((channel: any) => {
              return (
                <button 
                onClick={() => {
                  setChannelClicked(channel)
                  dispatch(getChannel(channel))
                }}
                className={`${channel._id === stateChannel._id ? 'bg-white' : 'bg-transparent'} px-2 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-full`}>
                  <span className='font-semibold'># {channel?.name}</span>
                </button>
              )
            })
          }
        </div>
      </div>
      <EditWorkspace state={editOptions} setState={setEditOptions} />
      <EditChannels state={editOptions} setState={setEditOptions} />
      <CreateChannel hiddenAlertChannel={hiddenAlertChannel} setHiddenAlertChannel={setHiddenAlertChannel} idWorkspace={_id} />
    </nav>
  )
}
export default SideBar;
