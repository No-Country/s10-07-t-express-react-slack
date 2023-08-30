import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import axios, { AxiosResponse } from 'axios'
import jwt_decode from 'jwt-decode'
// import io from 'socket.io-client'

import { Register, Errors, MyAxiosError, ResponseAxios } from './interfaces'
import { validationErrors } from './utils'
import astronauta from "../../assets/astronauta-cohete2.png"
import {FaUserCircle, FaLock} from 'react-icons/fa'

export const register = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

// PROVANDO CONECCION CON SOCKET
// const socket = io('/')

const Form: React.FC = () => {
  const [registerTemplate, setRegisterTemplate] = useState<Register>(register)
  const [errors, setErrors] = useState<Errors>({})

  // PROVANDO CONECCION CON SOCKET
  // const [message, setMessage] = useState('')
  // useEffect(() => {
  //   socket.on('message', (message: string) => {
  //     console.log(message)
  //   })
  // }, [message])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterTemplate({
      ...registerTemplate,
      [e.target.name]: e.target.value,
    })
    setErrors(
      validationErrors({
        ...registerTemplate,
        [e.target.name]: e.target.value,
      }),
    )
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!Object.entries(errors).length) {
        const response = await axios.post(
          'http://localhost:3001/user',
          registerTemplate
        ) as AxiosResponse<ResponseAxios>
        setRegisterTemplate(register)
        localStorage.setItem("userToken", response.data.data.token)
        window.location.href = '/workflows'
      } else {
        throw new Error('')
      }
    } catch (error) {
      const axiosError = error as MyAxiosError;

      if (axiosError.response) {
        // Manejar el error de respuesta HTTP
        alert(axiosError.response.data.data.error)
      }
    }
  }

  return (
    <section className='w-full flex items-center justify-between h-screen bg-bg-register px-24'>
      <div className='bg-forms w-[450px] flex flex-col items-center gap-y-8 border border-stone-500 py-6 px-6 rounded-lg '>
        <h3 className='font-semibold text-2xl text-button-orange'>Registro de usuario</h3>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-1'>
          <div className="relative">
            <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaUserCircle/>
            </div>
            <input 
            name='fullName'
            value={registerTemplate.fullName}
            onChange={handleChange}
            type='text'
            className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-xl block w-full pl-10 p-1.5"
            placeholder="Nombre completo"
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.fullName}</span>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-secundary-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input 
            name='email'
            placeholder='Email'
            value={registerTemplate.email}
            onChange={handleChange}
            type='email'
            className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.email}</span>
          )}
          <div className="relative">
            <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='password'
            placeholder='Contraseña'
            value={registerTemplate.password}
            type='password'
            onChange={handleChange}
            className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.password}</span>
          )}
          <div className="relative">
            <div className="text-bg absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            value={registerTemplate.confirmPassword}
            onChange={handleChange}
            type='password'
            className="bg-white border text-black placeholder:text-secundary-color text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold'>
              {errors?.confirmPassword}
            </span>
          )}
          <div className='py-1.5'>
            <h3 className='text-button-orange font-semibold'>Tu contraseña debe contener:</h3>
            <div className='flex flex-col text-sm text-white'>
              <span className={``}>Entre 08 a 15 caracteres</span>
              <span>01 letra mayuscula</span>
              <span>01 o mas numeros</span>
              <span>01 o mas caracteres especiales {`(#, /, |, $, etc...)`}</span>
            </div>
          </div>
          <button type='submit' className="bg-button-orange rounded-xl text-white font-semibold px-4 w-full py-1.5 mt-2">Crear cuenta</button>
        </form>
        <div className='w-full flex items-center text-button-orange gap-x-4 -my-2'>
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
          width={400}
          logo_alignment='center'
          shape='pill'
          text='signup_with'
        />
        <div className="flex items-center gap-x-2">
          <span className='text-white'>¿Ya tienes una cuenta?</span>
          <Link to={"/login"} className='text-button-orange underline font-semibold'>Inicia sesion</Link>
        </div>
      {/* // PROVANDO CONECCION CON SOCKE */}
      {/* <input
        type='text'
        onChange={(e) => {
          setMessage(e.target.value)
          socket.emit('message', message)
        }}
      /> */}
      </div>
      <img src={astronauta}/>
    </section>
  )
}
export default Form
