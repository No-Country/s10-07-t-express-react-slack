import { FC, useState } from "react";
// import { generateHexadecimalColor } from "./utils";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";

interface DropdownUser {
  profileImage?: string, 
  name: string, 
  email: string
}

const DropdownUser: FC<DropdownUser> = ({profileImage, name, email}) => {
  const navigate = useNavigate();
  const [hiddenDropdown, setHiddenDropdown] = useState(true)
  // const [bgImage, setBgImage] = useState<string>()

  // useEffect(() => {
  //   const bgColor = generateHexadecimalColor()
  //   setBgImage(bgColor)
  // }, [])
//console.log(localStorage);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSmallScreen = window.innerWidth < 640;
  const menuDirectionClass = isSmallScreen ? 'left-6' : 'right-6';

  return (
    <div className="relative">
      <button 
      onClick={() => setHiddenDropdown(!hiddenDropdown)}
      className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-2 focus:ring-gray-300" 
      type="button">
        {
          !profileImage || !profileImage.length ? 
          <div className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-12 h-12 rounded-full uppercase font-semibold`}>
            <span>
            {name && name.split(" ")[0] ? name.split(" ")[0][0] : ''}
            {name && name.split(" ")[1] ? name.split(" ")[1][0] : ''}
              </span>
          </div> :
          <img className="w-12 h-12 rounded-full" src={profileImage} alt="foto usuario" />
        }
      </button>
      <div className={`${hiddenDropdown ? 'hidden' : 'absolute'} ${menuDirectionClass} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-56 `}>
        <div className="px-4 py-3 lg:text-sm sm:text-lg text-gray-900 ">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul className="py-2 lg:text-sm sm:text-lg text-gray-700 " >
          <li>
            <button className="block px-4 py-2 hover:bg-gray-200 w-full text-start" onClick={() => setIsModalOpen(true)}>Perfil</button>
          </li>
          <li>
            <Link to={"/workspaces"} className="block px-4 py-2 hover:bg-gray-200 ">Mis espacios de trabajo</Link>
          </li>
          {/* <li>
            <Link to={""} className="block px-4 py-2 hover:bg-gray-200 ">Editar espacio de trabajo (opcional)</Link>
          </li> */}
        </ul>
        <div className="py-2">
          <ul>
          <li className="hover:cursor-pointer px-4 py-2 lg:text-sm sm:text-lg text-gray-700 hover:bg-gray-200 flex" onClick={handleLogout}><FaSignOutAlt className="flex mr-1 mt-1"/> Cerrar sesión</li>
          </ul>
        </div>
      </div>
      <UserProfile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
export default DropdownUser;
