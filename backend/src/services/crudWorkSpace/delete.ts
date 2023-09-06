import { Request, Response } from "express"
import { WorkSpaceModel } from "../../models/WorkSpace"

export const deleteWorkSpace = async (req: Request, res: Response) => {
    const workSpaceId = req.params.id
  try {
    const workSpace = await WorkSpaceModel.findByIdAndDelete(workSpaceId)
    if (!workSpace) {
        return res.json({ error: "El espacio de trabajo no existe." })
    }
    return res.status(204).json({msg: "Espacio eliminado."})
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}