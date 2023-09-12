import { FC, useState } from 'react'
import { AiOutlineClose, AiOutlinePlus, AiOutlineSend } from 'react-icons/ai'
import { Options, OptionsEdit, Props } from '../DropdownEditWorkspace';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import axios from 'axios';
import { joinMembers } from '../../../redux/slices/workspace.slice';

const EditMembers: FC<Props> = ({ state, setState }) => {
  const dispatch = useAppDispatch()

  const [membersEmails, setMembersEmails] = useState<string[]>([])
  const [member, setMember] = useState<string>("")
  const [hiddenAddMember, setHiddenAddMember] = useState<boolean>(false)
  const { members, _id } = useAppSelector(state => state.workspace)

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

  const handleAddMembers = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const dominiosPermitidos = [
      'gmail.com',
      'hotmail.com',
      'yahoo.com',
      'yahoo.es',
      'outlook.com',
      'outlook.es',
    ]
    const dominiosPermitidosRegex = new RegExp(
      `^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`,
      'i',
    )
    
    if(!member.length){
      alert("ingrese un email valido")
    }

    if (!regexEmail.test(member)) {
      alert('Por favor ingresa un email válido.')
    }

    if (!dominiosPermitidosRegex.test(member)) {
      alert('Por favor ingresa un dominio de email válido.')
    }

    const aux = membersEmails
    aux.push(member)
    setMembersEmails(aux)
    setMember("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember(e.target.value)
  }

  const deleteMemberr = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3001/leaveWorkSpace/${_id}/${id}`)
      alert("se borro el usuario exitosamente")
    } catch (error) {
      alert("No se puede eliminar el usuario")
    }
  }

  const handleDeleteMember = (email: string)=> {
    const index = membersEmails.indexOf(email)

    if(index !== -1){
      setMembersEmails((prevState: string[]) => {
        return prevState.filter(em => em !== email)
      })
    }
  }

  const sendInvitations = () => {
    if(membersEmails){
      if(membersEmails.length){
        dispatch(joinMembers(membersEmails))
        alert("Se enviaron las invitaciones")
      }else{
        alert("Debe invitar al menos un miembro, sino desea invitar a nadie, clickee en 'cancelar'")
      }
    }
  }

  return (
    <div
      className={`${state?.editUsers ? 'hidden' : 'block'} fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/5 shadow-xl rounded-lg p-8 bg-[#25254D] text-white flex flex-col gap-y-4 h-5/6 overflow-y-auto'>
        <div className="relative flex items-center justify-between">
          <div className='flex flex-col gap-y-3'>
            <span className='text-button-orange font-black text-3xl'>Administrar miembros</span>
            <p className='text-sm'>Elimina miembros que forman parte del espacio de trabajo</p>
          </div>
          <button
            className='rounded-md text-3xl text-white absolute top-0 right-0'
            onClick={showModal}>
            <AiOutlineClose className='' />
          </button>
        </div>
        <div className='p-0 border-b border-b-white/30 w-full flex items-center justify-start'>
          <div className='px-3 py-2 border-b-4 border-b-button-orange font-semibold text-button-orange'>
            Miembros
          </div>
        </div>
        <div className={`${hiddenAddMember ? 'flex' : 'hidden'} flex-col`}>
          <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col'>
              <label className='text-sm mb-1'>Email:</label>
              <div className='flex items-center gap-x-3'>
                <input onChange={handleChange} 
                value={member} 
                type="text" className='text-black placeholder:text-black/60 px-3 py-1 rounded-md' placeholder='Invitar usuario'/>
                <button 
                onClick={handleAddMembers}
                className='p-1.5 rounded-lg border'><AiOutlineSend/></button>
              </div>
            </div>
            <div className='flex items-center gap-x-3'>
              <button 
              onClick={() => {
                setMembersEmails([])
                setHiddenAddMember(false)
              }}
              className='px-3 py-1 border rounded-md '>Cancelar</button>
              <button 
              onClick={sendInvitations}
              className='px-3 py-1 rounded-md bg-secundary-color border border-secundary-color'>Confirmar invitaciones</button>
            </div>
          </div>
          <div className={`${membersEmails.length ? 'flex' : 'hidden'} p-2 border-2 rounded-lg mt-4 w-full items-center flex-wrap gap-3`}>
            {
              membersEmails?.map((email: any, index) => {
                return(
                  <div key={`${email}${index}`} className="relative px-2 pr-8 py-1 w-fit rounded-md border text-sm text-secundary-color">
                    <button 
                    onClick={() => handleDeleteMember(email)}
                    className="absolute right-1 border rounded-md bg-red-600 p-[0.15rem] text-white flex items-center justify-center h-4 w-4 hover:scale-[1.1]">
                      <AiOutlineClose />
                    </button>
                    <span className='text-white'>{email}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <button 
        onClick={() => {setHiddenAddMember(true)}}
        className={`${hiddenAddMember ? 'hidden' : 'flex'} items-center gap-x-4 text-button-orange font-semibold group`}>
          <div className='rounded-full border-2 text-xl border-button-orange p-1.5'>
            <AiOutlinePlus/>
          </div>
          <span className='group-hover:underline'>Agregar miembro</span>
        </button>
        <div className='overflow-y-auto flex flex-col gap-y-4 mt-2'>
          {
            members?.map((member: any) => {
              return (
                <div key={member._id} className='px-2 flex items-center justify-between border-b border-b-white/30 py-4'>
                  <div className='flex items-center gap-x-2'>
                    <img src={member.profileImage} alt="" className='rounded-full h-12 w-12'/>
                    <div>
                      <h3 className='font-semibold text-button-orange'>{member.fullName}</h3>
                      <span className='text-sm'>{member.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteMemberr(member._id)}
                    className='text-sm px-3 py-1 border border-red-600 rounded-md text-red-600 font-semibold hover:scale-[1.05]'>Eliminar</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default EditMembers;
