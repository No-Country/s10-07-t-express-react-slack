import { Request, Response } from "express"
import { WorkSpaceModel } from "../../models/WorkSpace"

export const allWorkSpace = async (_req: Request, res: Response) => {
  try {
    const workSpace = await WorkSpaceModel.find()
    if (workSpace.length) {
      return res.json(workSpace)
    }
    return res.json({ message: "No hay espacios de trabajo" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}