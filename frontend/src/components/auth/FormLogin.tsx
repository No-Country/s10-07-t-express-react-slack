import React, { useState } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { Login, MyAxiosError } from './interfaces'
import { Link } from 'react-router-dom'
// import { register } from './Form'

export const login = {
    email: '',
    password: ''
  }

const FormLogin = () => {

    const [loginTemplate, setLoginTemplate] = useState<Login>(login)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginTemplate({
          ...loginTemplate,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post(
              'http://localhost:3001/auth',
              loginTemplate,
            )
    
            setLoginTemplate(login)
            // localStorage.setItem("", response)
            window.location.href = '/workflows'
        } catch (error) {
          const axiosError = error as MyAxiosError;
            console.log(error)
          if (axiosError.response) {
            // Manejar el error de respuesta HTTP
            alert(axiosError.response.data.data.error)
          }
        }
      }

    return(
        <section className='w-1/3 px-8 py-12 flex flex-col items-center justify-center m-auto bg-white/5 rounded-xl gap-y-8'>
            <h3 className="text-button-orange font-semibold text-xl">Inicio de sesion</h3>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-2 '>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input 
                    name='email'
                    value={loginTemplate.email}
                    onChange={handleChange}
                    type='email'
                    className="bg-white border  text-secundary-color text-sm rounded-2xl block w-full pl-10 p-2.5 " placeholder="usuario@correoelectronico.com"/>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input 
                    name='password'
                    value={loginTemplate.password}
                    onChange={handleChange}
                    type='password'
                    className="bg-white border  text-secundary-color text-sm rounded-2xl block w-full pl-10 p-2.5 " placeholder="Contraseña"/>
                </div>
                <button type='submit' className="bg-button-orange rounded-xl text-white px-4 py-2">Iniciar sesion</button>
            </form>
            <div className='w-full flex items-center text-button-orange gap-x-4'>
                <div className='bg-button-orange/50 h-[1px] w-1/2'></div>
                <span>o</span>
                <div className='bg-button-orange/50 h-[1px] w-1/2'></div>
            </div>
            <GoogleLogin 
              onSuccess={(credentialResponse: CredentialResponse): void => {
                if (credentialResponse.credential) {
                  const decoded = jwt_decode(credentialResponse.credential)
                  console.log(decoded)
                  window.location.href = '/workflows'
                }
              }}
              onError={() => {
                console.log('Login Failed')
              }}
              width={200}
            />
            <div className="flex items-center gap-x-2">
              <span className='text-white'>¿No tienes una cuenta?</span>
              <Link to={"/register"} className='text-button-orange underline'>Registrate</Link>
            </div>
        </section>
    )
}
export default FormLogin;