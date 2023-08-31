import { Request, Response } from "express";
import { ChannelModel } from "../../models/Channels";

export const allChannels = async (_req: Request, res: Response) => {

  try {
    const channels = await ChannelModel.find()
    if (channels.length) {
      return res.json(channels)
    }
    return res.json({ message: "No hay info" })
  } catch (error) {
    if (error instanceof Error){
      return res.status(400).json({ error: error.message })
    }
  }
}