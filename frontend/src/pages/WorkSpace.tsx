import NavBar from "../components/NavBar";
import Channel from "../components/WorkSpace/Channel";
import SideBar from "../components/WorkSpace/SideBar";
import Footer from "../components/footer/Footer";

const WorkSpace = () => {
  return (
    <section className="h-screen w-full">
      <NavBar isUserLoggedIn={true}/>
      <div className="w-full flex items-center">
        <SideBar/>
        <Channel/>
      </div>
      <Footer/>
    </section>
  )
}
export default WorkSpace;
