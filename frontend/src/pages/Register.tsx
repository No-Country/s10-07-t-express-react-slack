import NavBar from "../components/NavBar";
import Form from "../components/auth/Form";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Register = () => {
  return(
    <section className="bg-bg">
      <NavBar isUserLoggedIn={false}/>
      <GoogleOAuthProvider clientId="1003915463020-v12qk1fvdg1smd9skp2i9vrv5j99tra6.apps.googleusercontent.com">
        <Form/> 
      </GoogleOAuthProvider>
    </section>
  )
}
export default Register;
