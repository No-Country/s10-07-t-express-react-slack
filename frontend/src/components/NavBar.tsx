import logo from "../assets/logo.png"
import rocket from "../assets/logo-rocket.png"
import { Link } from 'react-router-dom';

interface NavBarProps {
    isUserLoggedIn: boolean;
  }
  
function NavBar({isUserLoggedIn}: NavBarProps) {
  
  return (
    <nav className="bg-bg-navbar h-28 w-full px-10 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="h-12" src={logo} alt="" />
        <img className="h-12" src={rocket} alt="" />
      </div>
      <div>
        <Link to={"/"} className="uppercase text-white px-5 h-12">¿Quiénes somos?</Link>
        <Link to={"/"} className="uppercase text-white px-5 h-12">funciones</Link>
        <Link to={"/"} className="uppercase text-white px-5 h-12">Empresas</Link>
      </div>
        {isUserLoggedIn ? (
          <div className="flex space-x-3">
            <button  className="bg-button-orange rounded-3xl uppercase text-white px-5 h-12">Perfil</button>
          </div>
          ) : (
          <div className="flex items-center">
            <Link to='/login' className=" uppercase text-white pt-3 px-5 h-12">Iniciar sesion</Link>    
            <Link to='/register' className="uppercase bg-button-orange rounded-xl text-black px-8 py-2">Registrarse</Link>  
          </div>
        )}  
    </nav>
  );
}
export default NavBar;
