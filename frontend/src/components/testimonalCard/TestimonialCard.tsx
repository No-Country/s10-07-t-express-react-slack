import rocket from '../../assets/Cohete 4.png'

interface ITestimonalCard {
  picture: string
  testimonial: string
}
const TestimonialCard: React.FC<ITestimonalCard> = ({
  picture,
  testimonial,
}) => {
  return (
    <div className='bg-slate-100 w-80 h-100 rounded-md p-4 flex flex-col justify-between'>
      <img src={picture} alt='foto testimonio' />
      <p className='mt-10 text-center font-medium'>{testimonial}</p>
      <div className='relative mt-4'>
        <div className='bg-button-orange h-10 rounded-md w-9/12'></div>
        <img
          src={rocket}
          alt='logo cohete'
          className='absolute bottom-0.5 right-1'
        />
      </div>
    </div>
  )
}

export default TestimonialCard
