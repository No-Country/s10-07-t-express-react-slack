import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { createWorkspace, setName } from '../../redux/slices/workspace.slice'
import { validateUser } from '../../redux/slices/user.slice'
import Alert, { StateAlert, Status } from '../GlobalAlert'

const FirstStepWorkspace = () => {

  const dispatch = useAppDispatch()
  const { _id, fullName } = useAppSelector((state) => state.user)
  const workspace = useAppSelector((state) => state.workspace)
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
     if(workspace.loading === "success"){
      setOptionsAlert({
        status: Status.success,
        text: `El espacio de trabajo se creó con éxito. ¡Disfruta con tu equipo!`,
        title: `¡Felicitaciones ${fullName}!`
      })
      setHiddenAlert(false)
      setTimeout(() => {
        window.location.href = `/workspaces/secondstep/${workspace._id}`
      }, 5000);
    }
    if(workspace.loading === "error"){
      setOptionsAlert({
        status: Status.error,
        title: `¡Lo sentimos ${fullName}!`,
        text: "No se pudo crear el espacio de trabajo. Por favor, intenta nuevamente."
      })
      setHiddenAlert(false)
    }
  }, [workspace.loading])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value))
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    let body = {
      nameWorkSpace: workspace.nameWorkSpace,
      userId: _id
    }
    if (workspace.nameWorkSpace.length > 3 && workspace.nameWorkSpace.length < 40) {
      dispatch(createWorkspace(body))
    }else{
      setOptionsAlert({
        status: Status.warning,
        text: "El nombre del espacio de trabajo debe contener entre 3 y 40 caracteres.",
        title: "Ten cuidado"
      })
      setHiddenAlert(false)
    }
  }

  return (
    <section className="h-screen w-full flex items-center justify-center bg-background">
      <div className="px-4 lg:px-0 w-full lg:w-2/5 flex flex-col gap-y-8">
        <div className="text-white flex flex-col gap-y-3">
          <h3 className="w-full font-semibold text-3xl">
            Asigne un nombre a su empresa o equipo de trabajo
          </h3>
          <p>
            Este sera el nombre de su nuevo espacio de trabajo. Elige un nombre que su equipo reconozca. 
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
          <div className='relative w-full lg:w-3/4 flex items-center justify-between'>
            <input
              onChange={handleChange}
              value={workspace.nameWorkSpace}
              className="w-full px-3 py-1 rounded-lg bg-[#F1F0EA] border-2 border-[#BECCFF] text-text-workspace"
              type="text" 
            />
            <span className={`${workspace.nameWorkSpace.length < 3 || workspace.nameWorkSpace.length >= 40 ? "text-red-600" : "text-[#B7B7B7]"}  absolute right-4 font-semibold`}>{workspace.nameWorkSpace?.length}</span>
          </div>
          <button className="w-full md:w-fit px-8 py-2 bg-secundary-color text-white rounded-md mt-6" type="submit">Crear espacio de trabajo</button>
        </form>
      </div>
      <Alert hiddenAlert={hiddenAlert} setHiddenAlert={setHiddenAlert} status={optionsAlert.status} text={optionsAlert.text} title={optionsAlert.title}/>
    </section>
  )
}
export default FirstStepWorkspace;
