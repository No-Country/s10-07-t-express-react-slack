import NavBar from "../components/NavBar";
import FirstStepWorkspace from "../components/workflows/FirstStepWorkspace";

const WorkspaceFirstStep = () => {
    return(
        <section>
            <NavBar isUserLoggedIn={true}/>
            <FirstStepWorkspace/>
        </section>
    )
}
export default WorkspaceFirstStep;
