import { Request, Response } from "express";
import { IChannels } from "../../../../interface/IChannels";
import { validateChannel } from "../../validations/channel";
import { ChannelsModel } from "../../models/Channels";


export const channels = async (req: Request, res: Response) => {
  const channel = req.body as IChannels;

  try {
    const validations = await validateChannel(channel);


    const existChannel = await ChannelsModel.findOne({
      name: validations.name,
    });

    if (existChannel) {
      return res.status(400).json({ error: "El canal ya existe para el espacio de trabajo", existChannel });
    }


    const data = new ChannelsModel({
      userId: channel.userId,
      nameWorkSpaceId: channel.nameWorkSpaceId,
      name: channel.name,

    });

    await data.save();

    if (data) {
      return res.status(201).json({
        message: "Se creo con exito el Canal",
        data: data
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
