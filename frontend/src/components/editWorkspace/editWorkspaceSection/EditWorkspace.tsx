import { FC, useState, useEffect } from 'react';
import { Options, OptionsEdit, Props } from '../DropdownEditWorkspace';

import { AiOutlineClose, AiOutlinePaperClip } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import axios, { AxiosResponse } from 'axios';
import { useAppSelector } from '../../../redux/hooks';
const EditWorkspace: FC<Props> = ({ state, setState }) => {

  const [selectedFile, setSelectedFile] = useState<File>();
  const [previewURL, setPreviewURL] = useState<string>('');
  const [inputName, setInputName] = useState<string>("")
  const workspace = useAppSelector(state => state.workspace)

  useEffect(() => {
    setInputName(workspace.nameWorkSpace)
    // setPreviewURL(workspace.image)
  }, [workspace.nameWorkSpace])

  // Previsualizar imagen
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | any = e.target.files?.[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL('');
    }
  }

  // Manejo de estado para editar nombre
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

  // Ocultar modal
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

  // Obtener URL de imagen hosteada y enviar los cambios al servidor
  const handleSubmit = async () => {
    if(selectedFile?.name){
      const formData = new FormData();
            
      formData.append('file', selectedFile);
      formData.append("upload_preset", "connecta");
      formData.append('api_key', import.meta.env.CLOUDINARY_API_KEY);
      const {data} = await axios.post(import.meta.env.CLOUDINARY_URL, formData) as AxiosResponse

      await axios.put(`https://slack-clone-93lk.onrender.com/workSpace/${workspace._id}`, {nameWorkSpace: inputName, image: data.url}) as AxiosResponse
      alert("se edito correctamente el espacio de trabajo")
    }
  }

  const deleteWorkspace = async () => {
    try {
      await axios.delete(`https://slack-clone-93lk.onrender.com/workSpace/${workspace._id}`)
      window.location.href = "/workspaces"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={`${state?.editWorkspace ? 'hidden' : 'block'} bg-black/30 fixed w-full h-screen flex items-center justify-center top-0 left-0 z-40 overflow-x-hidden overflow-y-auto md:inset-0 `}>
      <div className='fixed w-2/5 shadow-xl rounded-lg p-8 bg-[#25254D] text-white flex flex-col gap-y-4 h-5/6 overflow-y-auto'>
        {/* header */}
        <div className="relative flex items-center justify-between">
          <div className='flex flex-col gap-y-3'>
            <span className='text-button-orange font-black text-3xl'>Editar espacio de trabajo</span>
            <p className='text-sm'>Personaliza tu espacio o cambia la configuración</p>
          </div>
          <button
            className='rounded-md text-3xl text-white absolute top-0 right-0'
            onClick={showModal}>
            <AiOutlineClose className='' />
          </button>
        </div>
        {/* nav de workspaces */}
        <div className='p-0 border-b border-b-white w-full flex items-center justify-start'>
          <div className='px-3 py-2 border-b-4 border-b-button-orange font-semibold text-button-orange'>
            {workspace.nameWorkSpace}
          </div>
        </div>
        <span className='text-button-orange font-semibold mb-2'>Información de tu espacio</span>
        {/* Editar nombre y eliminar espacio */}
        <div className='w-full flex justify-between'>
          <div className='w-2/5 flex flex-col gap-y-8'>
            <div className='flex flex-col '>
              <label className='text-sm font-semibold'>Nombre</label>
              <input type="text" className='text-sm rounded-[4px] text-black/70 px-2 py-1' value={inputName} onChange={handleChange}/>
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text-white font-semibold text-sm'>¿Deseas eliminar este espacio de trabajo?</span>
              <div className='flex flex-col gap-y-1'>
                <button 
                onClick={deleteWorkspace}
                className='rounded-[4px] bg-red-600 font-semibold text-sm px-8 py-2'>Eliminar</button>
                <span className='font-thin text-[12px]'>Esta acción no puede ser revertida.</span>
              </div>
            </div>
          </div>
          <div className='w-3/5 flex flex-col gap-y-3 items-center'>
            {
              
              <div className='w-28 h-28 rounded-full bg-white'>
              {
                previewURL ? (
                  <img src={previewURL} alt="Previsualización" className='rounded-full w-full object-fit' />
                ) : 
                <div className='w-28 h-28 rounded-full bg-white flex items-center justify-center'>
                  <div className='rounded-full w-full object-fit text-button-orange flex items-center justify-center text-6xl'>
                    <BsPersonWorkspace/>
                  </div>
                </div>
              }
              </div> 
            }
            <div>
              <span className='text-sm text-white font-semibold'>Cargar imagen</span>
              <label htmlFor="fileInput" className='text-sm relative flex w-full items-center hover:cursor-pointer text-center px-2 py-1.5 bg-white text-button-orange rounded-[6px]'>
                <input id="fileInput" type="file" onChange={handleFileChange} accept="image/*" className='hidden' />
                {previewURL ? selectedFile?.name : <div className='flex items-center gap-x-1'><AiOutlinePaperClip/><span>Subir archivo</span></div>}
                {
                  previewURL ?
                  <div 
                  onClick={() => {
                    setPreviewURL("")
                    setSelectedFile(undefined)
                  }}
                  className='absolute z-30 right-2 text-black text-xl'>
                    <AiOutlineClose/>
                  </div>: 
                  ''
                }
              </label>
              <span className='text-[10px]'>Tamaña máximo de la imagen: 20 MB</span>
            </div>
          </div>
        </div>
        {/* Subir o cambiar imagen */}
        <div className='flex items-center gap-x-4 mt-6 self-center'>
          <button 
          onClick={showModal}
          className='px-4 py-2 border font-semibold border-button-orange rounded-md hover:bg-black/10'>Cancelar</button>
          <button 
          onClick={handleSubmit}
          className='px-4 py-2 border font-semibold border-button-orange bg-button-orange rounded-md hover:bg-button-orange/80'>Guardar cambios</button>
        </div>
      </div>
    </div>
  )
}
export default EditWorkspace;
