import { Request, Response } from "express";
import { IChannel } from "../../../../interface/IMessage";
import { validationChannel } from "../../validations/items/name";
import { ChannelModel } from "../../models/Channels";

export const createChannel = async (req: Request, res: Response) => {

  const channel = req.body as IChannel;

  try {

    const validations = validationChannel(channel);

    const newChannel = await ChannelModel.create({
      nameChannel: validations.nameChannel,
      workSpace: channel.workSpace,
      userId: channel.userId
    })

    if (newChannel) {
      return res.status(201).json({
        message: "Se ah creado con exito un canal de difusion",
        newChannel
      })
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}