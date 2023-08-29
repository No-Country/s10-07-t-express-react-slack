// import axios from "axios";
import { useEffect } from "react";
// import { ResponseAxios } from "../auth/interfaces";

const InitialPage = () => {

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
    <section>
      <h2 className=""> Estos son sus espacios de trabajo</h2>
      <button className="border px-4 py-2 rounded-md">Crear espacio de trabajo</button>
    </section>
  )
}
export default InitialPage;
