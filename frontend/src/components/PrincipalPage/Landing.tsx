import bg from "../../assets/bg-image-landing1.png"
import logo from "../../assets/logo.png"
import rocket from "../../assets/logo-rocket.png"
const Landing = () => {
    return(
        <section className="">
            <div className="bg-bg-landing h-screen bg-cover">
                <div className="flex items-center space-x-2 pl-10 pt-48">
                    <img className="h-20" src={logo} alt="" />
                    <img className="h-20" src={rocket} alt="" />
                </div>
                <h3 className="text-white pl-12 text-4xl pt-8">El espacio donde realmente se siente la conexión.</h3>
            </div>  
            <div className="pt-20 bg-bg">

            </div>
        </section>
        
    )
}
export default Landing;
