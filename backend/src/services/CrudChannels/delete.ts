import { Request, Response } from "express"
import { ChannelsModel } from "../../models/Channels"

export const deleteChannel = async (req: Request, res: Response) => {
  const channelsId = req.params.idChannel
  try {
    const channel = await ChannelsModel.findByIdAndDelete(channelsId)
    if (!channel) {
      return res.status(400).json({ error: "El canal no existe." })
    }
    return res.status(201).json({ msg: "Canal eliminado." })

  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}