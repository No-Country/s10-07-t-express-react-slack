import {useEffect} from 'react'
import NavBar from "../components/NavBar";
import Channel from "../components/WorkSpace/Channel";
import SideBar from "../components/WorkSpace/SideBar";
import Footer from "../components/footer/Footer";
import { useAppDispatch } from '../redux/hooks';
import { getOneWorkspace } from '../redux/slices/workspace.slice';
import { useParams } from 'react-router-dom';

const WorkSpace = () => {
  const {id} = useParams<string>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getOneWorkspace(id))
  }, [])

  return (
    <section className="h-screen w-full">
      <NavBar isUserLoggedIn={true}/>
      <div className="w-full flex items-center">
        <SideBar/>
        <Channel/>
      </div>
      <Footer/>
    </section>
  )
}
export default WorkSpace;
