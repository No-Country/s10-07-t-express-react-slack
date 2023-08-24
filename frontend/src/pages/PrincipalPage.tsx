import Landing from "../components/PrincipalPage/Landing";
import NavBar from "../components/NavBar";

const PrincipalPage = () => {
    return(
        <>
            <NavBar isUserLoggedIn={false} />
            <Landing/>
        </>
    )
}
export default PrincipalPage;
