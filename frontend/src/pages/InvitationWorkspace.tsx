import { useParams } from "react-router-dom";
import Invitation from "../components/WorkSpace/Invitation";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";


const InvitationWorkspace = () => {
  const { id } = useParams();

    return(
        <section className="bg-[#0C1C34]">
            <NavBar isUserLoggedIn={true}/>
            <Invitation id={id}/>
            <Footer/>
        </section>
    )
}
export default InvitationWorkspace;
