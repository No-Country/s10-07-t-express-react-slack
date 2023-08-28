import React from 'react'
import LandingButtonForm from '../landingButtonForm/LandingButtonForm'

interface ILandinForm {
  placeholder: string
  buttonText: string
}

const LandingForm: React.FC<ILandinForm> = ({ placeholder, buttonText }) => {
  return (
    <div className='w-full flex flex-row px-2 mt-4 bg-slate-200 rounded-md'>
      <form className='w-full flex flex-row items-center justify-end'>
        <input
          className='w-full px-1 py-7  h-12 bg-transparent'
          type='email'
          placeholder={placeholder}
        />
        <LandingButtonForm buttonText={buttonText} />
      </form>
    </div>
  )
}

export default LandingForm
