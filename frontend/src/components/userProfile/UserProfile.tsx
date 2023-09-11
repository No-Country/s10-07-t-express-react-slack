import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaTimes, FaCamera, FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Axios from "axios";

const UserProfile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [errorUpdateMessage, setErrorUpdateMessage] = useState("")
  const [successUpdateMessage, setSuccessUpdateMessage] = useState("")

  const id = useSelector((state) =>  state.user._id);
  const name = useSelector((state) =>  state.user.fullName);
  const email = useSelector((state) =>  state.user.email);
  const profileImage = useSelector((state) =>  state.user.profileImage);
  console.log(name, id);
  
  const handleUpdateUser = async () => {
    const userData = {fullName: editedName} 
    try {
      const response = await Axios.put(`http://localhost:3001/user/${id}`, userData
        //fullName: editedName, // Reemplaza "nuevoNombre" con el nuevo nombre del usuario.
        //profileImage: nuevaImagen, // Reemplaza "nuevaImagen" con la nueva imagen del usuario.
      );
      setSuccessUpdateMessage(response.data.msg)
      setIsEditingName(false);
    } catch (error) {
      if(error){setErrorUpdateMessage("Error al actualizar el usuario")}
    }
  };

  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(name);
  console.log(editedName);
  
  const handleEditName = () => {
    setIsEditingName(true);
  };


  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-50 bg-bg-profile rounded-lg p-6 h-auto w-80 items-center">
        <div className="flex justify-between">
        <h2 className="font-semibold text-2xl text-button-orange">Mi perfil</h2>
        <button className=" text-white rounded " onClick={onClose}>
          <FaTimes className="hover:text-button-orange"/>
        </button>
        </div>
        <div  className="flex items-center justify-center pt-4">
            <div className="relative">
                {
                !profileImage || !profileImage.length ? 
                <div className={`bg-button-orange text-white text-7xl flex items-center justify-center w-36 h-36 rounded-full uppercase font-semibold relative`}>
                <span>
                    {name && name.split(" ")[0] ? name.split(" ")[0][0] : ''}
                    {name && name.split(" ")[1] ? name.split(" ")[1][0] : ''}
                </span>
                </div> :
                    <img className="w-36 h-36 flex items-center justify-center rounded-full relative" src={profileImage} alt="foto usuario" />
                }
                <div className="absolute pl-24"  style={{ bottom: '25px' }}>
                <button className=" w-9 h-9 flex items-center justify-center rounded-full bg-[#ddb18d] hover:border-white hover:border-2 z-10 absolute"> 
                    <FaCamera className="text-white"/>
                </button>
                </div>
            </div>
        </div>
        <div className='bg-white h-[1px] w-full mt-8'></div>
        <div className="mt-2"> 
        
      {isEditingName ? (
        <div className="flex items-center">
          <input type="text" className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5" value={editedName} onChange={(e) => setEditedName(e.target.value)}/>
          <button onClick={() => setIsEditingName(false)}><FaTimes className="text-white ml-2 hover:text-button-orange"/></button>
        </div>
      ) : (
        <h2 className="text-white text-xl font-medium mt-2 flex">{name} <FaRegEdit className="ml-2 mt-1" onClick={handleEditName} /></h2>
        )}
            <h2 className="text-white text-lg mt-3">Correo electrónico:</h2>
            <p className="text-white text-base mt-">{email}</p>
        </div>
      <button className="bg-button-orange rounded-xl text-white font-semibold px-4 w-full py-1.5 mt-2" onClick={handleUpdateUser}>Guardar cambios</button>
      {errorUpdateMessage && <p className='text-red-600 font-semibold mt-4'>Error: {errorUpdateMessage}</p>}
      {successUpdateMessage && <p className='text-green-600 font-semibold mt-4'>{successUpdateMessage}</p>}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default UserProfile;