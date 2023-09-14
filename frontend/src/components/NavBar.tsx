import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import DropdownUser from './dropdownUser/DropdownUser'
import { useAppSelector } from '../redux/hooks'

interface NavBarProps {
  isUserLoggedIn: boolean
}

function NavBar({ isUserLoggedIn }: NavBarProps) {
  const links = [
    { name: '¿QUIENÉS SOMOS?', path: '/' },
    { name: 'FUNCIONES', path: '/' },
    { name: 'EMPRESAS', path: '/' },
  ]
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const name = useAppSelector((state) => state.user.fullName)
  const email = useAppSelector((state) => state.user.email)
  const profileImage = useAppSelector((state) => state.user.profileImage)

  return (
    <nav className='bg-bg-navbar w-full h-20 md:flex items-center justify-between fixed top-0 left-0 py-4 md:px-4 px-7 z-10'>
      <div
        className='flex items-center space-x-2 cursor-pointer mr-2 flex-shrink-0'
        onClick={() => navigate('/')}>
        <img src={logo} width='180px' alt='imagen de logo' />
      </div>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {menuOpen ? (
          <AiOutlineClose style={{ color: 'white' }} />
        ) : (
          <AiOutlineMenu style={{ color: 'white' }} />
        )}
      </div>
      <div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-bg-navbar md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen ? 'top-20' : 'top-[-490px]'
          }`}>
          {links.map((link) => (
            <li key={link.name} className='md:mx-4  md:my-0 my-7'>
              <NavLink to={link.path} className='text-white'>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            {isUserLoggedIn ? (
              <div className='flex space-x-3'>
                <DropdownUser
                  profileImage={profileImage}
                  name={name}
                  email={email}
                />
              </div>
            ) : (
              <div className='md:flex md:items-center justify-between'>
                <NavLink
                  to='/login'
                  className='uppercase  text-white md:px-3 py-2 md:ml-8'>
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to='/register'
                  className='uppercase bg-button-orange rounded-xl text-black px-2 py-2 ml-1 '>
                  Registrarse
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
