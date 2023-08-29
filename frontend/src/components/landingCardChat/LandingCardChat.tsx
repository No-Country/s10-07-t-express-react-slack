import astroChat from '../../assets/astro chat.png'
import useIsMd from '../../hooks/useIsMd'

const LandingCardChat = () => {
  const underMd = useIsMd()
  return (
    <div className='flex flex-col items-center'>
      <img
        src={astroChat}
        height={underMd ? '200px' : ''}
        width={underMd ? '200px' : ''}
        alt='atronauta chats'
      />
      <p className='text-3xl text-button-orange text-center leading-10'>
        AGENDA <br /> COMPARTIDA
      </p>
      <p className='text-xl text-white text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas rerum
        itaque perferendis corporis iste quaerat quam suscipit a voluptates illo
        saepe minima dolore, ab cumque, mollitia distinctio vero aut.
      </p>
    </div>
  )
}

export default LandingCardChat
