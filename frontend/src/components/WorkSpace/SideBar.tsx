import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import DropdownEditWorkspace, {
  OptionsEdit,
} from '../editWorkspace/DropdownEditWorkspace'
import EditWorkspace from '../editWorkspace/editWorkspaceSection/EditWorkspace'
import EditChannels from '../editWorkspace/editChannelsSection/EditChannels'
import CreateChannel from '../channels/CreateChannels'

import { AiOutlineMessage, AiOutlinePlus } from 'react-icons/ai'
import { FaHashtag } from 'react-icons/fa'
import rightArrow from '../../assets/rightArrow.svg'
import bottomArrow from '../../assets/bottomArrow.svg'
import { getChannel } from '../../redux/slices/channel.slice'
import EditMembers from '../editWorkspace/editMembersSection/EditMembers'
import useIsSm from '../../hooks/useIsSm'

const SideBar = () => {
  const [editOptions, setEditOptions] = useState<OptionsEdit>({
    editWorkspace: true,
    editUsers: true,
    editChannels: true,
  })
  const [dropdownChannels, setDropdownChannels] = useState<boolean>(false)
  const [hiddenAlertChannel, setHiddenAlertChannel] = useState<boolean>(true)
  const underSm = useIsSm()

  const dispatch = useAppDispatch()
  const { channelsId, nameWorkSpace, _id } = useAppSelector(
    (state) => state.workspace,
  )
  const stateChannel = useAppSelector((state) => state.channel)

  useEffect(() => {
    if (channelsId.length) {
      dispatch(getChannel(channelsId[0]))
    }
  }, [channelsId])

  return (
    <nav
      className={`h-screen mt-20 bg-[#292956] text-button-orange flex flex-col gap-y-8 px-4 py-12 ${
        underSm ? 'w-1/3' : '1/4'
      }  min-w-min relative`}>
      <div className='flex-col shrink'>
        <div
          className={`w-full flex items-center  ${
            underSm ? 'justify-between' : 'justify-start'
          } `}>
          <span className='text-2xl font-semibold'>
            {underSm ? nameWorkSpace : ''}
          </span>
          <DropdownEditWorkspace setState={setEditOptions} />
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='flex items-center gap-x-4'>
            <div className='text-xl'>
              <AiOutlineMessage />
            </div>
            <div className='flex items-center gap-x-2'>
              <span className='py-2 border-b border-b-white'>
                {underSm ? 'Hilos de conversaciones' : ''}
              </span>
              <img src={rightArrow} />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              onClick={() => {
                setDropdownChannels(!dropdownChannels)
              }}
              className='flex items-center gap-x-4'>
              <div className='text-xl'>
                <FaHashtag />
              </div>
              <div className='flex items-center gap-x-2'>
                <span className='py-2 border-b border-b-white'>
                  {underSm ? 'Canales' : ''}
                </span>
                <img src={dropdownChannels ? bottomArrow : rightArrow} />
              </div>
            </button>
            <button
              onClick={() => setHiddenAlertChannel(false)}
              className='text-2xl bg-slate-100/5 hover:bg-slate-100/10 p-1 rounded-lg'>
              <AiOutlinePlus />
            </button>
          </div>
          <div
            className={`${
              dropdownChannels ? 'flex' : 'hidden'
            } flex-col ml-8 w-full gap-y-4`}>
            {channelsId.map((channel: any) => {
              return (
                <button
                  key={channel._id}
                  onClick={() => {
                    dispatch(getChannel(channel))
                  }}
                  className={`${
                    channel._id === stateChannel._id
                      ? 'bg-white'
                      : 'bg-transparent'
                  } px-4 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-3/4 flex flex-col`}>
                  <span className='font-semibold'># {channel?.name}</span>
                </button>
              )
            })}
          </div>
        </div>
        <EditWorkspace state={editOptions} setState={setEditOptions} />
        <EditChannels state={editOptions} setState={setEditOptions} />
        <EditMembers state={editOptions} setState={setEditOptions} />
        <CreateChannel
          hiddenAlertChannel={hiddenAlertChannel}
          setHiddenAlertChannel={setHiddenAlertChannel}
          idWorkspace={_id}
        />
      </div>
    </nav>
  )
}
export default SideBar
