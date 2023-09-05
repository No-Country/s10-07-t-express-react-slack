import { Request, Response } from "express";
import { Usermodel } from "../../models/Users";
import { IUser } from "../../../../interface/IUser";

export const updateUser = async (req: Request, res: Response) => {
    const userData = req.body as IUser
    try {
        const user = await Usermodel.findByIdAndUpdate(req.params.id,userData)
        if (!user) {
            return res.json({error: "El usuario no existe."})
        }
        return res.json({ msg: "Datos actualizados con éxito." })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}