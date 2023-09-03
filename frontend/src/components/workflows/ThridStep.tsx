import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { IMessages } from "../../../../interface/IMessage"

export const ThirdStepWorkSpace = () => {

  const initialState = {
    message: "",
    userId: "",
    workSpaceId: "",
  }
  
  const [input, setInput] = useState<IMessages>(initialState)

  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch();
  }, [dispatch]);
  const { message, userId, workSpaceId } = useAppSelector(state => state.messages)
  console.log("MENSAGE:", message)
  console.log("USER ID:", userId)
  console.log("SPACE ID:", workSpaceId)
  const { user } = useAppSelector(state => state)
  console.log("fullName:", user)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(input)
  }

  return (
    <form action="">
      <label htmlFor="">heyy</label>
      <input type="text" />
    </form>
  );
}