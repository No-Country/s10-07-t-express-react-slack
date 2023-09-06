import {FC, useEffect, useState} from "react"
import logo from '../../assets/logo.png'
import astroRocket from '../../assets/astronauta-cohete2.png'
import { useAppDispatch } from "../../redux/hooks"
import { validateUser } from "../../redux/slices/user.slice"
import axios from "axios"

const Invitation: FC<string | any> = ({id}) => {
    const dispatch = useAppDispatch()
    const [workspace, setWorkspace] = useState({})

    useEffect(() => {
        dispatch(validateUser())
        const getWorkspace = async ( ) => {
            const {data} = await axios.get(`http://localhost:3001/oneworkspace/${id}`)
            setWorkspace(data.data)
        }
        getWorkspace()
    }, [])

    return(
        <section className='flex flex-col items-center justify-center gap-y-6'>
            <img src={logo} alt="logo connecta" />
            <h2 className='text-3xl font-semibold'>Unirse a <span className='text-button-orange'>{workspace.nameWorkspace}</span> en Connecta</h2>
            <div className='relative bg-[#F1F0EA] p-6 w-3/4 flex items-center justify-center'>
                <img src={astroRocket} alt="astronauta en cohete" className='absolute left-2'/>
                <h3>Te han invitado a unirte a su equipo de trabajo</h3>
                {/* <div>
                    <div className="flex items-center">
                        <img src={workspace.members[0].profileImage} alt="" className="w-8 h-8 object-fit "/>
                        <img src={workspace.members[1].profileImage} alt="" className="w-8 h-8 object-fit "/>
                        <img src={workspace.members[2].profileImage} alt="" className="w-8 h-8 object-fit "/>
                    </div>
                        
                    <span>{workspace.members[0].name} y {workspace.members.length} personas más se han unido</span>
                </div> */}
            </div>
        </section>
    )
}
export default Invitation;
