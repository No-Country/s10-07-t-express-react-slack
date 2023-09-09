import { Request, Response } from "express";
import { IChannels } from "../../../../interface/IChannels";
import { validateChannel } from "../../validations/channel";
import { ChannelsModel } from "../../models/Channels";
import { WorkSpaceModel } from "../../models/WorkSpace";


export const channels = async (req: Request, res: Response) => {
  const channel = req.body as IChannels;
  const idWorkspace = req.params.idWorkspace as string;
  try {
    const validations = await validateChannel(channel);


    const workspace = await WorkSpaceModel.findById({
      _id: idWorkspace,
    })
    .populate("channelsId", ["name", "description", "_id"]);

    const existChannel = workspace?.channelsId?.some((channel: any) => validations.name === channel.name) as boolean | undefined;

    if (existChannel) {
      return res.status(400).json({ error: `El canal ya existe para el espacio de trabajo ${workspace?.nameWorkSpace}` });
    }

    const data = new ChannelsModel({
      workSpaceId: workspace?._id,
      name: channel.name,
      description: channel.description
    });

    await data.save();

    const channelPush = []
    channelPush.push(data._id)
    if(workspace?.channelsId){
      const dataa: any = await WorkSpaceModel.findById({_id: idWorkspace})
      await WorkSpaceModel.updateOne({_id: idWorkspace}, {channelsId: [...dataa?.channelsId, ...channelPush]})
      
      if (dataa) {
        return res.status(201).json({
          message: "Se creo con exito el Canal",
          data: dataa
        });
      }
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
