import NavBar from "../components/NavBar";
import PasswordRecovery from "../components/auth/PasswordRecovery.tsx";
import astroovni from "../assets/astro ovni.png"

const Recovery = () => {
  return(
      <section className="w-full relative ">
      <NavBar isUserLoggedIn={false}/>
        
        <div className="bg-background w-auto flex justify-between h-screen bg-bg-register px-24 relative pt-32">
        <img src={astroovni} alt='astro' className=' absolute pt-24 z-10 pl-96 ' />
            <div className="w-100 gap-6 justify-between">
                <h1 className="text-white lg:text-7xl font-semibold text-justify pb-20">¿Olvidaste la<br />
                contraseña?</h1>
                <h2 className="text-white lg:text-3xl font-semibold leading-7 text-justify pb-20">¡No te preocupes, podemos<br />
                ayudarte!</h2>
                <h3 className="text-white lg:text-2xl text-justify">Ingresa tu dirección de correo<br />
                electrónico, para restablecer<br />
                rápidamente tu contraseña. Te<br />
                enviaremos un mensaje con el<br />
                código para el cambio de<br />
                contraseña.</h3>
            </div>
      <PasswordRecovery/>
      </div>
    </section>
  )
}
export default Recovery;
