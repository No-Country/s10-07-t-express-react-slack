import axios, { AxiosResponse } from 'axios';
import {FC, useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { FaHashtag, FaPencilAlt } from 'react-icons/fa';

interface Props {
    hiddenAlertChannel?: boolean;
    setHiddenAlertChannel: (value: boolean) => void;
    idWorkspace: string;
}

interface Template {
    name?: string,
    description?: string
}

const CreateChannel: FC<Props> = ({hiddenAlertChannel, setHiddenAlertChannel, idWorkspace}) => {
    const [template, setTemplate] = useState<Template>({
        name: "",
        description: ""
    })

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post(`https://slack-clone-93lk.onrender.com/channel/${idWorkspace}`, template) as AxiosResponse
        window.location.href = `./${idWorkspace}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplate({
          ...template,
          [e.target.name]: e.target.value,
        })
        // setErrors(
        //   validationErrors({
        //     ...registerTemplate,
        //     [e.target.name]: e.target.value,
        //   }),
        // )
    }


    return(
        <div
        className={`${hiddenAlertChannel ? 'hidden' : 'block'} fixed bg-black/30 w-full h-screen flex flex-col items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0`}>
            <div className="fixed w-2/5 shadow-xl rounded-lg p-8 bg-[#25254D] text-white flex flex-col gap-y-4 h-fit overflow-y-auto">
                <div className="relative flex items-center justify-between border-b border-white/30 pb-8">
                    <div className='flex flex-col gap-y-3'>
                        <span className='text-button-orange font-black text-3xl'># Crear canal</span>
                        <p className='text-sm'>Personaliza tu canal como creas necesario</p>
                    </div>
                    <button
                        className='rounded-md text-3xl text-white absolute top-0 right-0'
                        onClick={() => {setHiddenAlertChannel(!hiddenAlertChannel)}}>
                        <AiOutlineClose className='' />
                    </button>
                </div>
                <form className='pt-6 flex flex-col gap-y-6' onSubmit={handleSubmit}>
                    <div className="relative">
                        <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <FaHashtag/>
                        </div>
                        <input 
                        name='name'
                        value={template.name}
                        onChange={handleChange}
                        type='text'
                        className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-lg block w-full pl-10 p-1.5"
                        placeholder="Nombre canal"
                        />
                    </div>
                    <div className="relative">
                        <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <FaPencilAlt/>
                        </div>
                        <input 
                        name='description'
                        value={template.description}
                        onChange={handleChange}
                        type='text'
                        className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-lg block w-full pl-10 p-1.5"
                        placeholder="Descripcion"
                        />
                    </div>
                    <button className='rounded-lg px-6 py-2 text-white bg-secundary-color' type="submit">Crear canal</button>
                </form>
            </div>
            
        </div>
    )
}
export default CreateChannel;
