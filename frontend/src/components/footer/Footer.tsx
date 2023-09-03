import styles from './footer.module.css'
import logoColor from '../../assets/logo color.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} flex md:flex-row md:justify-center md:flex-grow flex-col md:px-6 px-1 py-10 w-full`}>
      <div className='flex flex-col w-full'>
        <div className='flex md:flex-row md:justify-center flex-col items-center md:items-start w-full'>
          <div className='flex flex-col text-center md:w-auto w-40 mr-20 mb-6'>
            <div className='flex justify-center'>
              <img src={logoColor} alt='logo a color' />
            </div>
            <div className='flex flex-row justify-around md:w-auto w-40 text-xl pt-4'>
              <AiOutlineInstagram />
              <AiOutlineWhatsApp />
              <AiOutlineLinkedin />
              <AiOutlineMail />
            </div>
          </div>
          <div className='flex md:flex-row flex-col gap-8'>
            <div className='flex gap-8'>
              <div className='md:flex md:flex-col md:mx-0 mx-2'>
                <h3 className='font-semibold text-base'>¿POR QUÉ ELEGIRNOS?</h3>
                <ul>
                  <li className='py-1 text-sm'>Innovación</li>
                  <li className='py-1 text-sm'>Canales</li>
                  <li className='py-1 text-sm'>Motivación</li>
                  <li className='py-1 text-sm'>Productividad</li>
                  <li className='py-1 text-sm'>Demostración</li>
                </ul>
              </div>
              <div className='md:flex md:flex-col md:mx-0 mx-2'>
                <h3 className='font-semibold text-base'>PRODUCTO</h3>
                <ul>
                  <li className='py-1 text-sm'>Funciones</li>
                  <li className='py-1 text-sm'>Seguridad</li>
                  <li className='py-1 text-sm'>Soluciones</li>
                  <li className='py-1 text-sm'>Demostración</li>
                </ul>
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='md:flex md:flex-col md:mx-0 mx-2'>
                <h3 className='font-semibold text-base'>¿PRODUCTO?</h3>
                <ul>
                  <li className='py-1 text-sm'>Software de comunicación</li>
                  <li className='py-1 text-sm'>Marketing</li>
                  <li className='py-1 text-sm'>Desadorrallores</li>
                  <li className='py-1 text-sm'>Educación</li>
                  <li className='py-1 text-sm'>Especialistas en IT</li>
                  <li className='py-1 text-sm'>Empresas logísticas</li>
                </ul>
              </div>
              <div className='flex flex-col md:mx-0 mx-2'>
                <h3 className='font-semibold text-base'>EMPRESA</h3>
                <ul>
                  <li className='py-1 text-sm'>Conocenos</li>
                  <li className='py-1 text-sm'>Centro de ayuda</li>
                  <li className='py-1 text-sm'>Noticias</li>
                  <li className='py-1 text-sm'>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='h-0.5 bg-black my-2'></div>
        <div className='flex  md:flex-row md:justify-center flex-col items-center font-semibold pt-2 pb-1'>
          <Link to='#' className='md:py-0 py-1'>
            POLITICAS DE PRIVACIDAD
          </Link>
          <Link to='#' className='md:py-0 py-1 mx-20'>
            TÉRMINOS Y CONDICIONES
          </Link>
          <Link to='#' className='md:py-0 py-1'>
            CONTACTARNOS
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
