import Landing from '../components/PrincipalPage/Landing'
import NavBar from '../components/NavBar'
import Footer from '../components/footer/Footer'

const PrincipalPage = () => {
  return (
    <>
      <NavBar isUserLoggedIn={false} />
      <Landing />
      <Footer />
    </>
  )
}
export default PrincipalPage
