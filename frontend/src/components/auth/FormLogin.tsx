import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import axios, { AxiosResponse } from 'axios'
import jwt_decode from 'jwt-decode'

import { Decoded, Login, MyAxiosError, ResponseAxios } from './interfaces'
import { FaLock } from 'react-icons/fa'
import { useAppDispatch } from '../../redux/hooks'
import { validateUser } from '../../redux/slices/user.slice'

export const login = {
  email: '',
  password: ''
}

const FormLogin = () => {

  const [loginTemplate, setLoginTemplate] = useState<Login>(login)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginTemplate({
      ...loginTemplate,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginTemplate.email && loginTemplate.password) {
      dispatch(validateUser())
      setLoginTemplate(login)
      window.location.href = '/workspaces'
    }
  }

  return(
    <section className=''>
      <div className='bg-forms w-[450px] flex flex-col items-center gap-y-8 border border-stone-500 py-6 px-6 rounded-lg relative'>
        <h3 className='font-semibold text-2xl text-button-orange'>Inicio de sesión</h3>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-1' >
          <div className="relative">
            <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-background" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
            </div>
            <input 
            name='email'
            value={loginTemplate.email}
            onChange={handleChange}
            type='email'
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5"
            placeholder="usuario@correoelectronico.com"/>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-background">
              <FaLock/>
            </div>
            <input 
            name='password'
            value={loginTemplate.password}
            onChange={handleChange}
            type='password'
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5" 
            placeholder="Contraseña"/>
          </div>
          <button type='submit' className="bg-button-orange rounded-xl text-white font-semibold px-4 w-full py-1.5 mt-2">Iniciar sesión</button>
        </form>
        <div className="flex items-center gap-x-2">
          <Link to={"/recover"} className='text-button-orange underline'>¿Olvidaste tu constraseña?</Link>
        </div>
        <div className='w-full flex items-center text-button-orange gap-x-4'>
          <div className='bg-button-orange/50 h-[1px] w-1/2'></div>
          <span>o</span>
          <div className='bg-button-orange/50 h-[1px] w-1/2'></div>
        </div>
        <GoogleLogin 
          onSuccess={async (credentialResponse: CredentialResponse): Promise<void> => {
            if (credentialResponse.credential) {
              const decoded = jwt_decode(credentialResponse.credential) as Decoded
              const response = await axios.post(
                'http://localhost:3001/authgoogle',
                {
                  email: decoded.email,
                  fullName: decoded.email,
                  profileImage: decoded.picture,
                  loginGoogle: true
                }
              ) as AxiosResponse<ResponseAxios>
              localStorage.setItem("userToken", response.data.data.token)
              window.location.href = '/workspaces'
            }
          }}
          onError={() => {
            console.log('Login Failed')
          }}
          width={400}
          logo_alignment='center'
          shape='pill'
          text='signup_with'
        />
        <div className="flex items-center gap-x-2">
          <span className='text-white'>¿No tienes una cuenta?</span>
          <Link to={"/register"} className='text-button-orange underline'>Registrate</Link>
        </div>
      </div>
    </section>
  )
}
export default FormLogin;
