import { useState } from 'react';
import DropdownEditWorkspace, { OptionsEdit } from '../editWorkspace/DropdownEditWorkspace';
import EditWorkspace from '../editWorkspace/editWorkspaceSection/EditWorkspace';
import EditChannels from '../editWorkspace/editChannelsSection/EditChannels';
import {AiOutlineMessage, AiOutlinePlus} from 'react-icons/ai'
import {FaHashtag} from 'react-icons/fa'
import rightArrow from '../../assets/rightArrow.svg'
import bottomArrow from '../../assets/bottomArrow.svg'
import { useAppSelector } from '../../redux/hooks';
import CreateChannel from '../channels/CreateChannels';



const SideBar = () => {

    const [editOptions, setEditOptions] = useState<OptionsEdit>({
        editWorkspace: true,
        editUsers: true,
        editChannels: true
    })
    const [dropdownChannels, setDropdownChannels] = useState<boolean>(false)
    const {channelsId, nameWorkSpace, _id} = useAppSelector(state => state.workspace)
    const [hiddenAlertChannel, setHiddenAlertChannel] = useState<boolean>(true)
    return(
        <nav className='h-screen mt-20 bg-[#292956] text-button-orange flex flex-col gap-y-8 px-4 py-8 w-1/3'>
            <div className='w-full flex items-center justify-between'>
                <span className='text-xl font-semibold'>{nameWorkSpace}</span>
                <DropdownEditWorkspace setState={setEditOptions}/>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-4'>
                    <div className='text-xl'>
                        <AiOutlineMessage />
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <span className='py-2 border-b border-b-white'>Hilos de conversaciones</span>
                        <img src={rightArrow}/>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button 
                    onClick={() => {setDropdownChannels(!dropdownChannels)}}
                    className='flex items-center gap-x-4'>
                        <div className='text-xl'>
                            <FaHashtag/>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <span className='py-2 border-b border-b-white'>Canales</span>
                            <img src={dropdownChannels ? bottomArrow : rightArrow}/>
                        </div>
                    </button>
                    <button 
                    onClick={() => setHiddenAlertChannel(false)}
                    className='text-2xl bg-slate-100/5 hover:bg-slate-100/10 p-1 rounded-lg'>
                        <AiOutlinePlus/>
                    </button>
                </div>
                <div className={`${dropdownChannels ? 'flex' : 'hidden'} flex-col ml-8 w-full gap-y-4`}>
                    {
                        channelsId.map((channel: any) => {
                            return(
                                <div className={`px-2 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-full`}>
                                    <span className='font-semibold'># {channel?.name}</span>
                                </div>
                            )
                        })
                    }
                    {/* <div className={`px-2 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-full`}>
                        <span className='font-semibold'># Listas</span>
                    </div> */}
                </div>
            </div>
            <EditWorkspace state={editOptions} setState={setEditOptions}/>
            <EditChannels state={editOptions} setState={setEditOptions}/>
            <CreateChannel hiddenAlertChannel={hiddenAlertChannel} setHiddenAlertChannel={setHiddenAlertChannel} idWorkspace={_id}/>
        </nav>
    )
}
export default SideBar;
