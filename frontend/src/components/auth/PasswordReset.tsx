import {FaLock} from 'react-icons/fa'
import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFailure, resetSuccess } from '../../redux/slices/reset.slice';
import { Errors, MyAxiosError, ResponseAxios } from './interfaces'
import { useParams } from 'react-router-dom';
import {Reset} from './interfaces'
import { validationErrorsReset } from './utils'

export const reset = {
  password: '',
  confirmPassword: '',
} 

const PasswordReset = () => {
  const { id } = useParams();
  console.log(id);

  const [newPasswordFront, setNewPassword] = useState<Reset>(reset)
  const [errors, setErrors] = useState<Errors>({})
  console.log(newPasswordFront, errors)
  const dispatch = useDispatch();

  const resetError = useSelector((state) => state.passwordReset.error);
  const resetSuccessMessage = useSelector((state) => state.passwordReset.successMessage);
  console.log(resetError, resetSuccessMessage)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword({
      ...newPasswordFront,
      [e.target.name]: e.target.value,
    })
    setErrors(
      validationErrorsReset({
        ...newPasswordFront,
        [e.target.name]: e.target.value,
      }),
    )
  }
  // const handleResetSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`http://localhost:3001/reset-password/${id}`, { newPassword }) as AxiosResponse<ResponseAxios>;
  //     dispatch(resetSuccess(response.data.msg));
  //     console.log(response.data.msg)
  //   } catch (error) {
  //     dispatch(resetFailure(error.response.data.error));
  //   };
  // }
  const handleResetSubmit = async (e:React.ChangeEvent<HTMLFormElement>)  => {
    e.preventDefault()
    const newPasswordData = { newPassword: newPasswordFront.confirmPassword };
    try {
      if (!Object.entries(errors).length) {
        const response = await axios.post(
          `http://localhost:3001/reset-password/${id}`,
          newPasswordData
        ) as AxiosResponse<ResponseAxios>
        setNewPassword(reset)
        dispatch(resetSuccess(response.data.msg));
       // window.location.href = '/workspaces'
      } else {
        dispatch(resetFailure(error.response.data.error));
      }
    } catch (error) {
      const axiosError = error as MyAxiosError;

      if (axiosError.response) {
        // Manejar el error de respuesta HTTP
        //alert(axiosError.response.data.data.error)
      }
    }
  };

    return(
      <section className='lg:pt-32 sm:pt-12 pb-12 mx-auto lg:mx-0'>
      <div className='bg-forms sm:w-[450px] w-[352px] flex flex-col items-center gap-y-8 border border-stone-500 py-6 px-6 rounded-lg relative'>
      <h3 className='font-semibold text-2xl text-button-orange'>Crear nueva contraseña</h3>
      <form onSubmit={handleResetSubmit} className='w-full flex flex-col gap-y-1'  >
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='password'
            placeholder='Contraseña'
            type='password'
            value={newPasswordFront.password}
            onChange={handleChange}
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
          {errors && (
            <span className='text-red-600 font-semibold'>{errors?.password}</span>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            type='password'
            value={newPasswordFront.confirmPassword}
            onChange={handleChange}
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5"
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
        <button type='submit' className="bg-button-orange rounded-xl text-white font-semibold px-4 w-full py-1.5 mt-2">Aceptar</button>
      </form>
      {resetError && <p className='text-red-600 font-semibold'>Error: {resetError}</p>}
      {resetSuccessMessage && <p className='text-green-600 font-semibold'>{resetSuccessMessage}</p>}
      </div>
    </section>
    )
  }
  export default PasswordReset;