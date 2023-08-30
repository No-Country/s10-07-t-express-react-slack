import { FaLock} from 'react-icons/fa'

const PasswordReset = () => {
    
  
    return(
      <section className="bg-bg h-screen flex items-center justify-center">
      <div className='w-1/3 px-8 py-12 flex flex-col items-center justify-center m-auto bg-white/5 rounded-xl gap-y-8'>
      <h3 className="text-button-orange font-semibold text-xl">Recuperación de contraseña</h3>
      <form className='w-full flex flex-col gap-y-2' >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
          </div>
          <input name='email' type="email" className="bg-white border text-secundary-color text-sm rounded-2xl block w-full pl-10 p-2.5 " placeholder="usuario@correoelectronico.com"/>
        </div>
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
          
          <div className='py-1.5'>
            <h3 className='text-button-orange font-semibold'>Tu contraseña debe contener:</h3>
            <div className='flex flex-col text-sm text-white'>
              <span className={``}>Entre 08 a 15 caracteres</span>
              <span>01 letra mayuscula</span>
              <span>01 o mas numeros</span>
              <span>01 o mas caracteres especiales {`(#, /, |, $, etc...)`}</span>
            </div>
          </div>
        <button type='submit' className="bg-button-orange rounded-xl text-white px-4 py-2">Enviar email</button>
      </form>
      </div>
    </section>
    )
  }
  export default PasswordReset;