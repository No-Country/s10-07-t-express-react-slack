import NavBar from "../components/NavBar";
import SecondStepWorkspace from "../components/workflows/SecondStep";

const WorkspaceSecondStep = () => {
    return(
        <section>
            <NavBar isUserLoggedIn={true}/>
            <SecondStepWorkspace/>
        </section>
    )
}
export default WorkspaceSecondStep;
