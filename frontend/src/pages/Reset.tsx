import NavBar from "../components/NavBar";
import PasswordReset from "../components/auth/PasswordReset.tsx";
import astroreset from "../assets/astro reset.png"
import Footer from '../components/footer/Footer'

const Reset = () => {
  return(
      <section className="flex flex-col items-center w-full max-w-full relative">
      <NavBar isUserLoggedIn={false}/>
        
        <div className="bg-background w-full flex flex-col md:flex-row justify-between h-auto bg-bg-register md:px-12 lg:px-24 pt-32">
      <PasswordReset/>
            <div className="w-100 gap-6 mx-auto md:mx-auto lg:mx-0 mb-12">
                <img src={astroreset} alt='astro' className='w-80 lg:w-full' />
            </div>
      </div>
      <Footer/>
    </section>
  )
}
export default Reset;
