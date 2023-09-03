import {FaLock} from 'react-icons/fa'
import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFailure, resetSuccess } from '../../redux/slices/reset.slice';
import { MyAxiosError, ResponseAxios } from './interfaces'
import { useParams } from 'react-router-dom';

const PasswordReset = () => {
  const { id, token } = useParams();
  console.log(id, token);
  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id');
  // const token = urlParams.get('token');
  // console.log(id, token)

  const [newPassword, setnewPassword] = useState('');
  const dispatch = useDispatch();

  const resetError = useSelector((state) => state.passwordReset.error);
  const resetSuccessMessage = useSelector((state) => state.passwordReset.successMessage);

  const handleResetSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/reset-password/${id}/${token}`, { newPassword }) as AxiosResponse<ResponseAxios>;
      dispatch(resetSuccess(response.data.msg));
    } catch (error) {
      dispatch(resetFailure(error.response.data.error));
    };
  }

    return(
      <section className='pt-32'>
      <div className='bg-forms w-[450px] flex flex-col items-center gap-y-8 border border-stone-500 py-6 px-6 rounded-lg relative'>
      <h3 className='font-semibold text-2xl text-button-orange'>Crear nueva contraseña</h3>
      <form className='w-full flex flex-col gap-y-1' onSubmit={handleResetSubmit} >
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='password'
            placeholder='Contraseña'
            type='password'
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaLock/>
            </div>
            <input 
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            type='password'
            className="bg-white border text-black placeholder:text-background text-sm rounded-xl block w-full pl-10 p-1.5"
            />
          </div>
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