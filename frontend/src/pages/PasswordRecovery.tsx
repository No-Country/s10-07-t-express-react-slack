import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recoveryFailure, recoverySlice, recoverySuccess } from '../redux/slices/recovery.slice';
import { MyAxiosError, ResponseAxios } from '../components/auth/interfaces'

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  
  const recoveryError = useSelector((state) => state.passwordRecovery.error);
  const recoverySuccessMessage = useSelector((state) => state.passwordRecovery.successMessage);

  const handleRecoverySubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/recover-password', { email }) as AxiosResponse<ResponseAxios>;
      dispatch(recoverySuccess(response.data.msg));
    } catch (error) {
      dispatch(recoveryFailure(error.response.data.error));
    };
  }


  return(
    <section className="bg-bg h-screen flex items-center justify-center">
    <div className='w-1/3 px-8 py-12 flex flex-col items-center justify-center m-auto bg-white/5 rounded-xl gap-y-8'>
    <h3 className="text-button-orange font-semibold text-xl">Recuperación de contraseña</h3>
    <form className='w-full flex flex-col gap-y-2' onSubmit={handleRecoverySubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
        </div>
        <input name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white border text-secundary-color text-sm rounded-2xl block w-full pl-10 p-2.5 " placeholder="usuario@correoelectronico.com"/>
      </div>
      <button type='submit' className="bg-button-orange rounded-xl text-white px-4 py-2">Enviar email</button>
    </form>
      {recoveryError && <p className='text-red-600 font-semibold'>Error: {recoveryError}</p>}
      {recoverySuccessMessage && <p className='text-red-600 font-semibold'>{recoverySuccessMessage}</p>}
    </div>
  </section>
  )
}
export default PasswordRecovery;
