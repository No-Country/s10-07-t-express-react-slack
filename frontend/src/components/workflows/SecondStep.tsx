import React, { useState } from 'react'

import {AiOutlineClose, AiOutlineEnter} from "react-icons/ai"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addMember, deleteMember, joinMembers } from '../../redux/slices/workspace.slice'

const SecondStepWorkspace = () => {

  const [member, setMember] = useState<string>("")
  const workspaceId: string | any = localStorage.getItem("workspaceId")
  const dispatch = useAppDispatch()
  const { members } = useAppSelector(state => state.workspace)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember(e.target.value)
  }

  const handleAddMembers = () => {
    dispatch(addMember(member))
    setMember("")
  }

  const handleDeleteMember = (email: string)=> {
    dispatch(deleteMember(email))
  }

  return (
    <section className="h-screen w-full flex items-center justify-center bg-background">
      <div className="w-2/5 flex flex-col gap-y-8">
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
              members?.map((email, index) => {
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
            <button onClick={() => {
              if(members){
                if(members.length){
                  dispatch(joinMembers(members))
                  window.location.href = `/workspaces/${workspaceId}`
                }else{
                  alert("Debe invitar al menos un miembro, sino desea invitar a nadie, clickee en 'omitir este paso'")
                }
              }
            }} className="w-fit px-8 py-2 bg-secundary-color text-white rounded-md">Siguiente</button>
            <Link to={`/workspaces/${workspaceId}`} className="w-fit px-8 py-2 text-secundary-color bg-white rounded-md">Omitir este paso</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SecondStepWorkspace;
