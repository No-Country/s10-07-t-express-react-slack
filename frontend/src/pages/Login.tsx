import FormLogin from "../components/auth/FormLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';
import NavBar from "../components/NavBar";
import astrogreeting from "../assets/astro greeting.png"
import Footer from '../components/footer/Footer'

const Login = () => {
  return(
    <section className="flex flex-col items-center w-full max-w-full">
        <NavBar isUserLoggedIn={false}/>
        <div className="bg-background w-full flex flex-col md:flex-row justify-between h-auto bg-bg-register md:px-12 lg:px-24 pt-32">
            <div className="h-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold lg:pb-20 md:w-full ml-8 mb-4">¡Hola,<br />
                de nuevo!</h1>  
                <img src={astrogreeting} alt='astro' className='mx-auto w-1/2 md:w-full md:pt-6 mb-6' />
            </div>
      <GoogleOAuthProvider clientId="1003915463020-v12qk1fvdg1smd9skp2i9vrv5j99tra6.apps.googleusercontent.com">
        <FormLogin/>  
      </GoogleOAuthProvider>
      </div>
      <Footer />
    </section>
  )
}
export default Login;
