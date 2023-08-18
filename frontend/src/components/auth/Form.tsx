import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { Register, Errors } from './interfaces';
import { validationErrors } from './utils';

const register = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const Form: React.FC = () => {
  const [registerTemplate, setRegisterTemplate] = useState<Register>(register)
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    setRegisterTemplate({ ...registerTemplate, [e.target.name]: e.target.value });
    setErrors(
      validationErrors({ ...registerTemplate, [e.target.name]: e.target.value })
    );
    console.log(registerTemplate)
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!Object.entries(errors).length){
        setRegisterTemplate(register)
        return redirect("/")
      }else{
        throw new Error("")
      }
    } catch (error) {
      alert("error")
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <input className='border' name='fullName'  value={registerTemplate.fullName} onChange={handleChange} type='text'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.fullName}</span>}
        <input className='border' name='email'  value={registerTemplate.email} onChange={handleChange} type='email'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.email}</span>}
        <input className='border' name='password'  value={registerTemplate.password} onChange={handleChange} type='password'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.password}</span>}
        <input className='border' name='confirmPassword'  value={registerTemplate.confirmPassword} onChange={handleChange} type='password'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.confirmPassword}</span>}
        <button type='submit'>Registrarse</button>
      </form>
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
