import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Form = () => {
  return(
    <>
      <GoogleLogin
        onSuccess={(credentialResponse: CredentialResponse): void => {
          if(credentialResponse.credential){
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  )
}
export default Form;
