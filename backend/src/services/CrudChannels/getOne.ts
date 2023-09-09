import { Request, Response } from "express";
import { ChannelsModel } from "../../models/Channels";

export const getOneChannel = async (req: Request, res: Response) => {
  try {
    const channel = await ChannelsModel.findById(req.params.idChannel).populate({path:'messages', options:{ sort: { 'createdAt': -1 } }})
    if (channel) {
      return res.status(200).json(channel)
    }
    return res.status(404).json({ msg: "El canal no existe" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}