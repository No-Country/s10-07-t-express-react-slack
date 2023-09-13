import NavBar from "../components/NavBar";
import PasswordRecovery from "../components/auth/PasswordRecovery.tsx";
import astroovni from "../assets/astro ovni.png"
import Footer from '../components/footer/Footer'

const Recovery = () => {
  return(
      <section className="flex flex-col items-center w-full max-w-full relative">
      <NavBar isUserLoggedIn={false}/>
        <div className="bg-background w-full flex flex-col md:flex-row justify-between h-auto bg-bg-register lg:px-24  md:px-12 pt-32 relative">
            <div className="w-100 gap-6 justify-between ml-8 relative">
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold lg:pb-20 md:w-full mb-4 relative">¿Olvidaste la<br />
                contraseña?</h1>
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold leading-7 text-justify pb-20">¡No te preocupes, podemos<br />
                ayudarte!</h2>
                <h3 className="text-white text-lg md:text-xl lg:text-2xl text-justify lg:pb-12">
                Ingresa tu dirección de <br />
                correo electrónico, para <br />
                restablecer rápidamente <br />
                tu contraseña. Te enviaremos <br />
                un mensaje con el código <br /> 
                para el cambio de contraseña.</h3>
            </div>
        <img src={astroovni} alt='astro' className='absolute z-10 mt-28 ml-64 w-1/3  lg:pl-32 lg:w-80' />
      <PasswordRecovery/>
      </div>
      <Footer/>
    </section>
  )
}
export default Recovery;
