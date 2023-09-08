import { Request, Response } from "express"
import { WorkSpaceModel } from "../../models/WorkSpace"

export const getOneWorkspace = async (req: Request, res: Response) => {
    const id = req.params.id
  try {
    const workSpace = await WorkSpaceModel.findById({_id: id})
    .populate("members", ["profileImage", "fullName", "_id", "email"])
    .populate("channelsId", ["name", "_id"])
    if (workSpace) {
      return res.json({data: workSpace})
    }
    return res.json({ msg: "No existe el espacio de trabajo" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
