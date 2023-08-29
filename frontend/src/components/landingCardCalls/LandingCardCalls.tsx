import astroLlamadas from '../../assets/astro llamadas.png'
import useIsMd from '../../hooks/useIsMd'

const LandingCardCalls = () => {
  const underMd = useIsMd()
  return (
    <div className='flex flex-col items-center'>
      <img
        src={astroLlamadas}
        height={underMd ? '200px' : ''}
        width={underMd ? '200px' : ''}
        alt='atronauta llamadas'
      />
      <p className='text-3xl text-button-orange text-center leading-10'>
        LLAMADAS <br /> DE AUDIO Y VIDEO
      </p>
      <p className='text-xl text-white text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas rerum
        itaque perferendis corporis iste quaerat quam suscipit a voluptates illo
        saepe minima dolore, ab cumque, mollitia distinctio vero aut.
      </p>
    </div>
  )
}

export default LandingCardCalls
