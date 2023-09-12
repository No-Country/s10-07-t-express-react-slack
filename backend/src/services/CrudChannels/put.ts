import { Request, Response } from "express";
import { IChannels } from "../../../../interface/IChannels";
import { ChannelsModel } from "../../models/Channels";

export const updateChannel = async (req: Request, res: Response) => {
    const channel_update = req.body as IChannels
    try {
        const channel = await ChannelsModel.findByIdAndUpdate(req.params.idChannel,channel_update,{ new: true })
        if (!channel) {
            return res.status(404).json({error: "El canal no existe."})
        }
        return res.status(200).json({ msg: "Datos actualizados con éxito.", channel })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}