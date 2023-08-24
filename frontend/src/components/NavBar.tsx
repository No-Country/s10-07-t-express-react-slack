import logo from "../assets/logo.png"
import rocket from "../assets/logo-rocket.png"
import { Link } from 'react-router-dom';

function NavBar() {
  
    return (
      <nav className="bg-bg-navbar h-28 w-full px-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img className="h-12" src={logo} alt="" />
            <img className="h-12" src={rocket} alt="" />
          </div>
            <div className="flex space-x-3">
            <button  className="bg-button-orange rounded-3xl text-white px-5 h-12">¿Quiénes somos?</button>
            <button  className="bg-button-orange rounded-3xl text-white px-5 h-12">Empresas</button>
            <Link to='/register' className="bg-button-orange rounded-3xl text-white pt-3 px-5 h-12">Registrarse</Link>
            </div>  
      </nav>
    );
}
export default NavBar;