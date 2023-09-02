import { Request, Response } from "express";
import { IChannels } from "../../../../interface/IChannels";
import { validateChannel } from "../../validations/channel";
import { ChannelsModel } from "../../models/Channels";
// import { validateChannel } from "../../validations/channel";

export const channels = async (req: Request, res: Response) => {
  const channel = req.body as IChannels;

  try {
    const validations = await validateChannel(channel);

    // const allSpace = await WorkSpaceModel.findOne({
    //   nameWorkSpace: validations.nameWorkSpace,
    // });

    // if (!allSpace) {
    //   return res.status(400).json({
    //     error: " No hay ningun espacio de trabajo",
    //   });
    // }

    const newChannel = new ChannelsModel({
      userId: channel.userId,
      nameWorkSpaceId: channel.nameWorkSpaceId,
      channels: channel.channels,

      // newChannel: validations.channels,
    });

    await newChannel.save();

    if (newChannel) {
      return res.status(201).json({
        message: "Se creo con exito el Canal",
        newChannel
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
