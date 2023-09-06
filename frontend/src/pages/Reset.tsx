import NavBar from "../components/NavBar";
import PasswordReset from "../components/auth/PasswordReset.tsx";
import astroreset from "../assets/astro reset.png"
import Footer from '../components/footer/Footer'

const Reset = () => {
  return(
      <section className="w-full relative ">
      <NavBar isUserLoggedIn={false}/>
        
        <div className="bg-background w-auto flex justify-between h-screen bg-bg-register px-24 relative pt-32">
      <PasswordReset/>
            <div className="w-100 gap-6 justify-between">
                <img src={astroreset} alt='astro' className='' />
            </div>
      </div>
      <Footer/>
    </section>
  )
}
export default Reset;
