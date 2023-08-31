import NavBar from "../components/NavBar";
import { ThirdStepWorkSpace } from "../components/workflows/ThridStep";

export const WorkspaceThridStep = () => {
  return (
    <section>
      <NavBar isUserLoggedIn={true} />
      <ThirdStepWorkSpace />
    </section>
  )
}
