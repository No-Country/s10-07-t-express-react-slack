import { Request, Response } from "express";
import { Usermodel } from "../../models/Users";
import { WorkSpaceModel } from "../../models/WorkSpace";

export const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.id
    try {
        const user = await Usermodel.findByIdAndDelete(userId)
        if (!user) {
            return res.json({ error: "El usuario no existe." })
        }
        return res.status(204).json({msg:"Usuario eliminado."})
        
    } catch (error) {
        if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
        }
    }
}