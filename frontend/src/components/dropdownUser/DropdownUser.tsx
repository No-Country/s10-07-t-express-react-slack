import { FC, useState } from "react";
// import { generateHexadecimalColor } from "./utils";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="relative">
      <button 
      onClick={() => setHiddenDropdown(!hiddenDropdown)}
      className="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-2 focus:ring-gray-300" 
      type="button">
        {
          !profileImage || !profileImage.length ? 
          <div className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-12 h-12 rounded-full uppercase font-semibold`}>
            <span>{name.split(" ")[0][0]}{name.split(" ")[1][0]}</span>
          </div> :
          <img className="w-12 h-12 rounded-full" src={profileImage} alt="foto usuario" />
        }
      </button>
      <div className={`${hiddenDropdown ? 'hidden' : 'absolute'} right-6 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 `}>
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 " >
          <li>
            <Link to={""} className="block px-4 py-2 hover:bg-gray-200 ">Editar perfil</Link>
          </li>
          <li>
            <Link to={""} className="block px-4 py-2 hover:bg-gray-200 ">Mis espacios de trabajo</Link>
          </li>
          <li>
            <Link to={""} className="block px-4 py-2 hover:bg-gray-200 ">Editar espacio de trabajo (opcional)</Link>
          </li>
        </ul>
        <div className="py-2">
          <ul>
          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" onClick={handleLogout}><FaSignOutAlt/> Cerrar sesion</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default DropdownUser;
