import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import SecondStepWorkspace from "../components/workflows/SecondStep";

const WorkspaceSecondStep = () => {
    return(
        <section>
            <NavBar isUserLoggedIn={true}/>
            <SecondStepWorkspace/>
            <Footer/>
        </section>
    )
}
export default WorkspaceSecondStep;
