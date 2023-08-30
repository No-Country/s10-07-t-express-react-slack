// import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { increment } from "../../redux/slices/user.slice";
// import { ResponseAxios } from "../auth/interfaces";

const InitialPage = () => {

  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.user.value)
  const handle = () => {
    dispatch(increment())
  }

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
      <button className="border px-4 py-2 rounded-md" onClick={handle}>+</button>
      <span>{count}</span>
    </section>
  )
}
export default InitialPage;
