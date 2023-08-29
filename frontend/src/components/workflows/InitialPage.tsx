// import axios from "axios";
import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { increment } from "../../redux/slices/user.slice";
// import { ResponseAxios } from "../auth/interfaces";
import chicoWorkspace from "../../assets/chico-workspace.png"
import chicaWorkspace from "../../assets/chica-workspace.png"
import { Link } from "react-router-dom";

const InitialPage = () => {

  // const dispatch = useAppDispatch()
  // const count = useAppSelector((state) => state.user.value)
  // const handle = () => {
  //   dispatch(increment())
  // }

  useEffect(() => {
    const token = localStorage.getItem("userToken") as string;
    // const response = axios("http://localhost:3001/auth", {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    console.log(token)
  }, [])

  return (
    <section className="w-full py-24 flex items-center justify-center bg-background">
      <div className="relative w-[55em] flex items-center justify-center px-20 py-12 bg-background-container-workspace text-text-workspace rounded-2xl">
        <div className="flex flex-col gap-y-6 w-96">
          <h3 className="text-2xl font-semibold">Crea un nuevo espacio de trabajo</h3>
          <p>
            Crea un nuevo espacio de trabajo, un lugar donde poder conversar
            y trabajar juntos, para crear un nuevo espacio de trabajo haz click
            en el boton de abajo. 
          </p>
          <Link to={"./firststep"} className="text-center px-4 py-2 bg-bg-navbar text-white rounded-md">Crear espacio de trabajo</Link>
        </div>
        <img src={chicoWorkspace} className="absolute -left-7 bottom-8"/>
        <img src={chicaWorkspace} className="absolute -bottom-[4.3rem] -right-10"/>
      </div>
    </section>
  )
}
export default InitialPage;
