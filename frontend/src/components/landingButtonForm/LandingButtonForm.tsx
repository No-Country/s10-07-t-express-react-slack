import React from 'react'

interface ILandingButtonForm {
  buttonText: string
}

const LandingButtonForm: React.FC<ILandingButtonForm> = ({ buttonText }) => {
  return (
    <button className='h-10 w-60 bg-button-orange rounded-md text-black ms-5 flex flex-row items-center justify-center'>
      {buttonText}
    </button>
  )
}

export default LandingButtonForm
