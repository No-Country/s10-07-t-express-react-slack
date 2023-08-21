import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import { Register, Errors } from './interfaces';
import { validationErrors } from './utils';
import io from 'socket.io-client'
import axios from 'axios';

const register = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

// PROVANDO CONECCION CON SOCKET
const socket = io("/");

const Form: React.FC = () => {
  const [registerTemplate, setRegisterTemplate] = useState<Register>(register)
  const [errors, setErrors] = useState<Errors>({})
  
  // PROVANDO CONECCION CON SOCKET
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on("message", (message: string) => {
      console.log(message);
    })
  }, [message]);

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

        const response = await axios.post("http://localhost:3001/user", registerTemplate)
        console.log(response)

        setRegisterTemplate(register)
        window.location.href = "/"
      }else{
        throw new Error("")
      }
    } catch (error) {
      console.log(error)
      alert("error")
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <input className='border' name='fullName'  placeholder='Nombre' value={registerTemplate.fullName} onChange={handleChange} type='text'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.fullName}</span>}
        <input className='border' name='email'  placeholder='Email' value={registerTemplate.email} onChange={handleChange} type='email'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.email}</span>}
        <input className='border' name='password'  placeholder='Contraseña' value={registerTemplate.password} onChange={handleChange} type='password'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.password}</span>}
        <input className='border' name='confirmPassword'  placeholder='Confirmar contraseña' value={registerTemplate.confirmPassword} onChange={handleChange} type='password'/>
        {errors && <span className="text-red-600 font-semibold">{errors?.confirmPassword}</span>}
        <button type='submit'>Registrarse</button>

        {/* // PROVANDO CONECCION CON SOCKE */}
        <input type="text" onChange={(e) => {
          setMessage(e.target.value);
          socket.emit("message", message)
        }} />

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
