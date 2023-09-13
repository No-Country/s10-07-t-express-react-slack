import NavBar from "../components/NavBar";
import Form from "../components/auth/Form";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from '../components/footer/Footer'
import astronauta from "../assets/astronauta-cohete2.png"

const Register = () => {
  return(
    <section className="flex flex-col items-center w-full max-w-full">
      <NavBar isUserLoggedIn={false}/>
      <div className="bg-background w-full flex flex-col md:flex-row justify-between h-auto bg-bg-register md:px-12 lg:px-24 pt-32">
      <GoogleOAuthProvider clientId="1003915463020-v12qk1fvdg1smd9skp2i9vrv5j99tra6.apps.googleusercontent.com">
        <Form/> 
      </GoogleOAuthProvider>
      <div className="w-100 gap-6 mx-auto md:mx-auto lg:mx-0 mb-12">
      <img src={astronauta} className='w-80 lg:w-full lg:mt-32'/>
      </div>
      </div>
      <Footer/>
    </section>
  )
}
export default Register;
