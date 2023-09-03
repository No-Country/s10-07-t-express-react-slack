import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import chicoWorkspace from "../../assets/chico-workspace.png"
import chicaWorkspace from "../../assets/chica-workspace.png"
import { Link } from "react-router-dom";
import { validateUser } from "../../redux/slices/user.slice";
import CardWorkspace from "./CardWorkspace";

const InitialPage = () => {

  const dispatch = useAppDispatch()
  const {email} = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(validateUser())
  }, [])

  return (
    <section className="w-full py-24 flex flex-col items-center gap-y-6 bg-background">
      <h2 className="text-3xl text-white font-semibold mr-[16em]">¡Bienvenido a la conexion!</h2>
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
      {
        <div className="bg-background-container-workspace w-[55em] flex flex-col items-center p-0 rounded-lg">
          <span className="w-full bg-button-orange text-xl rounded-t-lg px-12 py-6 text-white">
            Espacios de trabajo de <span className="font-semibold">{email}</span>
          </span>
          <div className="w-full">
            <CardWorkspace/>
          </div>
        </div>
      }
    </section>
  )
}
export default InitialPage;
