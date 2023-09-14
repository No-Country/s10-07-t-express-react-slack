import React, { useState, useEffect } from 'react'

import {AiOutlineClose, AiOutlineEnter} from "react-icons/ai"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addMember, deleteMember, joinMembers } from '../../redux/slices/workspace.slice'
import { validateUser } from '../../redux/slices/user.slice'
import Alert, { StateAlert, Status } from '../GlobalAlert'

const SecondStepWorkspace = () => {

  const [member, setMember] = useState<string>("")
  const {workspaceId} = useParams<string>()
  const dispatch = useAppDispatch()
  const { fullName } = useAppSelector((state) => state.user)
  const { members, loading } = useAppSelector(state => state.workspace)
  const [hiddenAlert, setHiddenAlert] = useState<boolean>(true)
  const [optionsAlert, setOptionsAlert] = useState<StateAlert>({
    status: Status.error,
    text: "string",
    title: "string"
  })

  useEffect(() => {
    dispatch(validateUser())
  }, [])

  useEffect(() => {
    if(loading === "success"){
     setOptionsAlert({
       status: Status.success,
       text: `Las invitaciones a tu espacio de trabajo se enviaron con éxito. ¡Disfruta con tu equipo!`,
       title: `¡Felicitaciones ${fullName}!`
     })
     setHiddenAlert(false)
     setTimeout(() => {
       window.location.href = `/workspaces/${workspaceId}`
     }, 5000);
   }
   if(loading === "error"){
     setOptionsAlert({
       status: Status.error,
       title: `¡Lo sentimos ${fullName}!`,
       text: "No se enviaron las invitaciones. Por favor, intenta nuevamente."
     })
     setHiddenAlert(false)
   }
 }, [loading])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember(e.target.value)
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

    dispatch(addMember(member))
    setMember("")
  }

  const handleDeleteMember = (email: string)=> {
    dispatch(deleteMember(email))
  }

  return (
    <section className="mt-20 py-20 w-full flex items-center justify-center bg-background">
      <div className="h-fit p-4 w-full lg:w-2/5 flex flex-col gap-y-8">
        <div className="text-white flex flex-col gap-y-3">
          <h3 className="font-semibold text-3xl">¿Quien mas esta en el equipo?</h3>
          <p className="font-thin">
            Añada contactos por email.
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="max-h-64 overflow-auto rounded-lg p-6 h-fit flex items-center flex-wrap gap-2 bg-white ">
            <div className="flex items-center gap-x-2">
              <input 
                onChange={handleChange} 
                value={member} 
                className="focus:border px-3 py-1 rounded-lg bg-white border-2 text-text-workspace" 
                type="text" />
              <button 
              onClick={handleAddMembers} 
              className="rounded-lg px-2 py-2 border-2 hover:bg-slate-100">
                <AiOutlineEnter></AiOutlineEnter>
              </button>
            </div>
            {
              members?.map((email: any, index) => {
                return(
                  <div key={`${email}${index}`} className="relative px-2 pr-8 py-1 rounded-md border-2 text-sm text-secundary-color">
                    <button 
                    onClick={() => handleDeleteMember(email)}
                    className="absolute top-1 right-1 border rounded-md bg-red-600 p-[0.15rem] text-white flex items-center justify-center h-4 w-4 hover:scale-[1.1]">
                      <AiOutlineClose ></AiOutlineClose>
                    </button>
                    <span>{email}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="flex items-center gap-x-3">
            <button 
            onClick={() => {
              if(members){
                if(members.length){
                  dispatch(joinMembers(members))
                  // window.location.href = `/workspaces/${workspaceId}`
                }else{
                  setOptionsAlert({
                    status: Status.warning,
                    text: "Debes agregar al menos una invitación para poder continuar en caso de no querer invitar a nadie, oprima 'omitir paso'",
                    title: "Ten cuidado"
                  })
                  setHiddenAlert(false)
                }
              }
            }} className="w-fit px-4 lg:px-8 py-1.5 lg:py-2 bg-secundary-color text-white rounded-md">Siguiente</button>
            <Link to={`/workspaces/${workspaceId}`} className="w-fit px-4 lg:px-8 py-1.5 lg:py-2 text-secundary-color bg-white rounded-md">Omitir este paso</Link>
          </div>
        </div>
      </div>
      <Alert hiddenAlert={hiddenAlert} setHiddenAlert={setHiddenAlert} status={optionsAlert.status} text={optionsAlert.text} title={optionsAlert.title}/>
    </section>
  )
}
export default SecondStepWorkspace;
