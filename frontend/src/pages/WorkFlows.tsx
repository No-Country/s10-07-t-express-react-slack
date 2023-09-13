import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import InitialPage from "../components/workflows/InitialPage";

const WorkFlows = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-full">
      <NavBar isUserLoggedIn={true} />
      <div className="bg-background w-full flex flex-col md:flex-row justify-between h-auto bg-bg-register md:px-12 lg:px-24 pt-32">
      
     
     
      <InitialPage/>
      </div>
      <Footer/>
    </section>
  )
}
export default WorkFlows;
