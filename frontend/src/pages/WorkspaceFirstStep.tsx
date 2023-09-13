import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import FirstStepWorkspace from "../components/workflows/FirstStepWorkspace";

const WorkspaceFirstStep = () => {
    return(
        <section>
            <NavBar isUserLoggedIn={true}/>
            <FirstStepWorkspace/>
            <Footer/>
        </section>
    )
}
export default WorkspaceFirstStep;
