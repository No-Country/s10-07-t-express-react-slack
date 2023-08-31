import FormLogin from "../components/auth/FormLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavBar from "../components/NavBar";
import astrogreeting from "../assets/astro greeting.png"

const Login = () => {
  return(
    <section className="w-full">
        <NavBar isUserLoggedIn={false}/>
        <div className="bg-background w-auto flex justify-between h-screen bg-bg-register px-24 pt-32">
            <div className="h-auto">
                <h1 className="text-white lg:text-7xl font-semibold text-justify pb-20">¡Hola,<br />
                de nuevo!</h1>  
                <img src={astrogreeting} alt='astro' className='pt-6' />
            </div>
      <GoogleOAuthProvider clientId="1003915463020-v12qk1fvdg1smd9skp2i9vrv5j99tra6.apps.googleusercontent.com">
        <FormLogin/>  
      </GoogleOAuthProvider>
      </div>
    </section>
  )
}
export default Login;
