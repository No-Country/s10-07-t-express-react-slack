import { Request, Response } from "express";
import { ChannelsModel } from "../../models/Channels";

export const allChannels = async (_req: Request, res: Response) => {

  try {
    const messages = await ChannelsModel.find()
    if (messages) {
      return res.json(messages)
    }
    return res.json({ message: "No hay canales" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}