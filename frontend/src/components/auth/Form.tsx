import React, { useState } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { Register, Errors } from './interfaces'
import { validationErrors } from './utils'
// import io from 'socket.io-client'
import axios from 'axios'

const register = {
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
        await axios.post(
          'http://localhost:3001/user',
          registerTemplate,
        )

        setRegisterTemplate(register)
        window.location.href = '/workflows'
      } else {
        throw new Error('')
      }
    } catch (error) {
      console.log(error)
      alert('error')
    }
  }

  return (
    <section className='w-full flex items-center justify-center mx-auto h-screen'>
      <div className='w-1/3 flex flex-col gap-y-8 border border-stone-500 py-10 px-6 rounded-lg'>
        <h3 className='text-2xl'>CONNECTA</h3>
        <p className='-mt-4'>Registrate en la plataforma lider en comunicacion.</p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 '>
          <input
            className='border rounded-md text-stone-600 px-3 py-2 placeholder:text-stone-500'
            name='fullName'
            placeholder='Nombre'
            value={registerTemplate.fullName}
            onChange={handleChange}
            type='text'
          />
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.fullName}</span>
          )}
          <input
            className='border rounded-md text-stone-600 px-3 py-2 placeholder:text-stone-500'
            name='email'
            placeholder='Email'
            value={registerTemplate.email}
            onChange={handleChange}
            type='email'
          />
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.email}</span>
          )}
          <input
            className='border rounded-md text-stone-600 px-3 py-2 placeholder:text-stone-500'
            name='password'
            placeholder='Contraseña'
            value={registerTemplate.password}
            onChange={handleChange}
            type='password'
          />
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.password}</span>
          )}
          <input
            className='border rounded-md text-stone-600 px-3 py-2 placeholder:text-stone-500'
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            value={registerTemplate.confirmPassword}
            onChange={handleChange}
            type='password'
          />
          {errors && (
            <span className='text-red-600 font-semibold'>
              {errors?.confirmPassword}
            </span>
          )}
          <div className='flex items-center gap-x-4 mt-4'>
            <button type='submit' className='border border-stone-500 rounded-md w-[200px] px-4 py-2 text-center'>Registrarse</button>
            <GoogleLogin
              onSuccess={(credentialResponse: CredentialResponse): void => {
                if (credentialResponse.credential) {
                  const decoded = jwt_decode(credentialResponse.credential)
                  console.log(decoded)
                }
              }}
              onError={() => {
                console.log('Login Failed')
              }}
              width={200}
            />
          </div>

          {/* // PROVANDO CONECCION CON SOCKE */}
          {/* <input
            type='text'
            onChange={(e) => {
              setMessage(e.target.value)
              socket.emit('message', message)
            }}
          /> */}
        </form>
      </div>
    </section>
  )
}
export default Form
