import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { FaTimes, FaCamera, FaRegEdit } from "react-icons/fa";
import { useAppSelector } from '../../redux/hooks';
import Axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [errorUpdateMessage, setErrorUpdateMessage] = useState("")
  const [successUpdateMessage, setSuccessUpdateMessage] = useState("")
  const id = useAppSelector((state) =>  state.user._id);
  const name = useAppSelector((state) =>  state.user.fullName);
  const email = useAppSelector((state) =>  state.user.email);
  const profileImage = useAppSelector((state) =>  state.user.profileImage);
 
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(name);
  
  const [selectedFile, setSelectedFile] = useState<File>();
  const [previewURL, setPreviewURL] = useState<string>('');
  
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
  
  const uploadImageToCloudinary = async () => {
    if (selectedFile?.name) {
      const formData = new FormData();
  
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'connecta');
      formData.append('api_key', '179368589966648');
  
      try {
        const response = await Axios.post('https://api.cloudinary.com/v1_1/dzkehbdcj/image/upload', formData);
        return response.data.url;
      } catch (error) {
        throw new Error('Error al cargar la imagen en Cloudinary');
      }
    } else {
      return null;
    }
  };
  
  const handleUpdateUser = async () => {
    try {
      const imageUrl = await uploadImageToCloudinary();
      const userData = {fullName:"", profileImage:""};
  
      if (editedName) {userData.fullName = editedName;}
      if (imageUrl) {userData.profileImage = imageUrl;}
  
      const response = await Axios.put(`https://slack-clone-93lk.onrender.com/user/${id}`, userData);

      if (response.status === 200) {
        setSuccessUpdateMessage(response.data.msg);
        setIsEditingName(false);
      } else {
        setErrorUpdateMessage(response.data.msg);
      }
    } catch (error) {
      if(error){setErrorUpdateMessage("Error al actualizar el usuario")}
    }
  };

  const elemento: any = document.getElementById("modal-root")

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
      <div className="flex items-center justify-center pt-4">
        <div className="relative">
        <div className="bg-button-orange text-white text-7xl flex items-center justify-center w-36 h-36 rounded-full uppercase font-semibold relative">
        {profileImage ? (
          <img src={profileImage} alt="Foto de perfil" className="w-36 h-36 rounded-full absolute inset-0" />
          ) : (<span>
            {name && name.split(' ')[0] ? name.split(' ')[0][0] : ''}
            {name && name.split(' ')[1] ? name.split(' ')[1][0] : ''}
          </span>)}
          {previewURL && (
            <img src={previewURL} alt="Previsualización" className="w-36 h-36 rounded-full absolute inset-0 "/>
          )}
          </div>
          <div className="absolute pl-24" style={{ bottom: '25px' }}>
            <label htmlFor="fileInput" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ddb18d] hover:border-white hover:border-2 z-10 absolute cursor-pointer">
            <input id="fileInput" type="file" onChange={handleFileChange} accept="image/*" className="hidden"/>
            {!previewURL ? (
              <div className="flex items-center gap-x-1">
                <FaCamera className="text-white" />
              </div>
            ) : null}
            {previewURL && (
              <div onClick={() => {setPreviewURL(''); setSelectedFile(undefined);}} className="absolute z-30 right-2 text-black text-xl cursor-pointer">
                <FaTimes className="text-white"/>
              </div>
            )}
            </label>
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
          <h2 className="text-white text-xl font-medium mt-2 flex">{name} <FaRegEdit className="ml-2 mt-1" onClick={() => setIsEditingName(true)}/></h2>
        )}
        <h2 className="text-white text-lg mt-3">Correo electrónico:</h2>
        <p className="text-white text-base mt-">{email}</p>
      </div>
      <button className="bg-button-orange rounded-xl text-white font-semibold px-4 w-full py-1.5 mt-2" onClick={handleUpdateUser}>Guardar cambios</button>
      {errorUpdateMessage && <p className='text-red-600 font-semibold mt-4'>Error: {errorUpdateMessage}</p>}
      {successUpdateMessage && <p className='text-green-600 font-semibold mt-4'>{successUpdateMessage}</p>} 
      </div>
    </div>,
    elemento
  );
};

export default UserProfile;
