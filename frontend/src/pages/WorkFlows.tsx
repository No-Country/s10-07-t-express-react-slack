import NavBar from "../components/NavBar";
import InitialPage from "../components/workflows/InitialPage";

const WorkFlows = () => {
  return (
    <section>
      <NavBar isUserLoggedIn={true} />
      <InitialPage/>
    </section>
  )
}
export default WorkFlows;
