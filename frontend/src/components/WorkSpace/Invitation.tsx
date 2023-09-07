import {FC, useEffect, useState} from "react"
import logo from '../../assets/logo.png'
import astroRocket from '../../assets/astronauta-cohete2.png'
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { validateUser } from "../../redux/slices/user.slice"
import axios from "axios"

interface Workspace {
    _id?: string;
    nameWorkSpace?: string;
    channelsId?: string[]
    members?: string[] 
}

const Invitation: FC<string | any> = ({id}) => {
    const dispatch = useAppDispatch()
    const [workspace, setWorkspace] = useState<Workspace>({})
    const {_id} = useAppSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(validateUser())
        const getWorkspace = async ( ) => {
            const {data} = await axios.get(`http://localhost:3001/oneworkspace/${id}`)
            setWorkspace(data.data)
        }
        getWorkspace()
    }, [])

    const handleClick = async () => {
        try {
            await axios(`http://localhost:3001/joinWorkSpace/${id}/${_id}`)
            window.location.href = `/workspaces/${workspace._id}`
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <section className='h-screen mt-20 py-20 flex flex-col items-center gap-y-6'>
            <img src={logo} alt="logo connecta" className="w-32"/>
            <h2 className='text-3xl font-semibold text-white'>Unirse a <span className='text-button-orange'>{workspace?.nameWorkSpace}</span> en Connecta</h2>
            <div className='flex flex-col h-[20rem] relative bg-[#F1F0EA] p-6 w-3/4 items-center justify-between rounded-xl'>
                <img src={astroRocket} alt="astronauta en cohete" className='absolute left-0 h-72'/>
                <h3 className="font-black text-2xl">Te han invitado a unirte a su equipo de trabajo</h3>
                <div className="flex flex-col items-center gap-y-4">
                    {/* <div className="flex items-center">
                        <img src={workspace.members[0].profileImage} alt="" className="w-8 h-8 object-fit "/>
                        <img src={workspace.members[1].profileImage} alt="" className="w-8 h-8 object-fit "/>
                        <img src={workspace.members[2].profileImage} alt="" className="w-8 h-8 object-fit "/>
                    </div> */}
                    <div className="flex items-center">
                        <div className={`bg-red-500 text-white text-xl flex items-center justify-center w-12 h-12 uppercase font-semibold`}>
                            <span>
                                Fc
                            </span>
                        </div>
                        <div className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-12 h-12 uppercase font-semibold`}>
                            <span>
                                As
                            </span>
                        </div>
                        <div className={`bg-blue-500 text-white text-xl flex items-center justify-center w-12 h-12 uppercase font-semibold`}>
                            <span>
                                dC
                            </span>
                        </div>
                    </div>
                    <span className="text-[#263238]">Juan y 2 personas más se han unido</span>
                </div>
                <button 
                onClick={handleClick}
                className="text-center px-10 py-3 bg-bg-navbar text-white rounded-md">Hacerme miembro</button>
            </div>
        </section>
    )
}
export default Invitation;
