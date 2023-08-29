import FormLogin from "../components/auth/FormLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  return(
    <section className="bg-bg h-screen flex items-center justify-center">
      <GoogleOAuthProvider clientId="1003915463020-v12qk1fvdg1smd9skp2i9vrv5j99tra6.apps.googleusercontent.com">
        <FormLogin/>  
      </GoogleOAuthProvider>
    </section>
  )
}
export default Login;
