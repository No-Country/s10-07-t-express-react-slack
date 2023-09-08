import { useState } from 'react';
import DropdownEditWorkspace, { OptionsEdit } from '../editWorkspace/DropdownEditWorkspace';
import EditWorkspace from '../editWorkspace/editWorkspaceSection/EditWorkspace';
import EditChannels from '../editWorkspace/editChannelsSection/EditChannels';
import {AiOutlineMessage} from 'react-icons/ai'
import {FaHashtag} from 'react-icons/fa'
import rightArrow from '../../assets/rightArrow.svg'
import bottomArrow from '../../assets/bottomArrow.svg'


const SideBar = () => {

    const [editOptions, setEditOptions] = useState<OptionsEdit>({
        editWorkspace: true,
        editUsers: true,
        editChannels: true
    })
    const [dropdownChannels, setDropdownChannels] = useState<boolean>(false)

    return(
        <nav className='h-screen mt-20 bg-[#292956] text-button-orange flex flex-col gap-y-8 px-4 py-8 w-1/3'>
            <div className='w-full flex items-center justify-between'>
                <span className='text-xl font-semibold'>Nombre Workspace</span>
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
                <div className={`${dropdownChannels ? 'flex' : 'hidden'} flex-col ml-8 w-full gap-y-4`}>
                    <div className={`px-2 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-full`}>
                        <span className='font-semibold'># General</span>
                    </div>
                    <div className={`px-2 py-1 rounded-l-full hover:bg-white hover:cursor-pointer w-full`}>
                        <span className='font-semibold'># Listas</span>
                    </div>
                </div>
            </div>
            <EditWorkspace state={editOptions} setState={setEditOptions}/>
            <EditChannels state={editOptions} setState={setEditOptions}/>
        </nav>
    )
}
export default SideBar;
