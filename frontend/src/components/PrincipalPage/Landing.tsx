import logo from '../../assets/logo.png'
import styles from './Landing.module.css'
import landingAstro from '../../assets/astronauta-cohete2.png'
import LandingForm from '../landingForm/LandingForm'
import FeaturesSlider from '../featuresSlider/FeaturesSlider'
import useIsMd from '../../hooks/useIsMd'
import LandingCardMsj from '../landingCardMsj/LandingCardMsj'
import LandingCardCalls from '../landingCardCalls/LandingCardCalls'
import LandingCardChat from '../landingCardChat/LandingCardChat'
import fondoGris from '../../assets/fondo gris.png'
import astroPriv from '../../assets/astro privacidad sin fondo (1).png'
import TestimonialCard from '../testimonalCard/TestimonialCard'
import testimonialPicture1 from '../../assets/testiminal picture 1.png'
import testimonialPicture2 from '../../assets/testiminal picture 2.png'
import testimonialPicture3 from '../../assets/testiminal picture 3.png'

const Landing = () => {
  const underMd = useIsMd()

  return (
    <section
      className={`${styles.landingBG} flex flex-col items-center max-w-full`}>
      <section className='md:flex md:flex-row md:justify-between flex flex-col-reverse items-center w-4/5 pt-40'>
        <div className='md:items-start  flex flex-col items-center'>
          <img src={logo} alt='logo' className='pb-4' />
          <h1 className='text-3xl leading-10 text-white '>
            MANTENETE CONECTADO <br />
            EN TODO MOMENTO, <br />
            DESDE CUALQUIER LUGAR
          </h1>
          <LandingForm
            placeholder='Ingresa tu correo electrónico'
            buttonText='Iniciar Sesión'
          />
        </div>
        <div>
          <img src={landingAstro} alt='astronauta en cohete' />
        </div>
      </section>
      <section className='flex justify-center max-w-ful gap-4 w-4/5 mt-10'>
        {underMd ? (
          <FeaturesSlider />
        ) : (
          <>
            <div>
              <LandingCardMsj />
            </div>
            <div>
              <LandingCardCalls />
            </div>
            <div>
              <LandingCardChat />
            </div>
          </>
        )}
      </section>
      <section className='md:flex md:flex-row md:justify-between flex flex-col items-center md:w-4/5 pt-40 gap-4'>
        <div>
          <p className='text-3xl text-button-orange leading-10 font-semibold'>
            CREA UN NUEVO ESPACIO <br />
            DE TRABAJO
          </p>
          <p className='text-2xl text-white my-6 leading-10 '>
            Trabajar en <br />
            equipo
            <br /> ahora es más fácil
          </p>
          <LandingForm
            placeholder='Ingresa tu correo electrónico'
            buttonText='Registrate'
          />
        </div>
        <div className=''>
          <img src={fondoGris} alt='diseño de pagina' />
        </div>
      </section>
      <section className='md:flex md:flex-row md:justify-between flex flex-col items-center md:w-4/5 pt-40 gap-4 px-8'>
        <img src={astroPriv} alt='astronauto privacidad' />
        <div>
          <p className='text-3xl text-button-orange leading-10 font-semibold'>
            PRIVACIDAD Y SEGURIDAD
          </p>
          <p className='text-2xl text-white my-6 leading-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quidem veniam nulla ab corporis aspernatur similique. Corporis,
            recusandae in excepturi dolorum voluptate totam? Totam molestias,
            beatae repudiandae perspiciatis quas iure?
          </p>
        </div>
      </section>
      <section className='flex flex-col items-center md:w-4/5 pt-40 gap-20'>
        <h2 className='text-2xl text-white font-semibold text-center'>
          TESTIMONIOS DE NUESTROS USUARIOS
        </h2>
        <div className='flex flex-col gap-2 lg:flex lg:flex-row lg:gap-4 mb-12'>
          <TestimonialCard
            picture={testimonialPicture1}
            testimonial='“La conexión entre los equipos con Connecta es fantastica”'
          />
          <TestimonialCard
            picture={testimonialPicture2}
            testimonial='“Descubri Connecta y mi productividad en el trabajo ha crecido enormemente”'
          />
          <TestimonialCard
            picture={testimonialPicture3}
            testimonial='“Desde  que uso Connecta la 
            organización en mi trabajo ha mejorado considerablemente”'
          />
        </div>
      </section>
    </section>
  )
}
export default Landing
