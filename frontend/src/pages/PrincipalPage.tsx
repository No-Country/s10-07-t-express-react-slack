import Landing from "../components/PrincipalPage/Landing";
import NavBar from "../components/NavBar";

const PrincipalPage = () => {
    return(
        <>
            <NavBar />
        <section className="flex items-center justify-center">
            <Landing/>
        </section>
        </>
    )
}
export default PrincipalPage;
