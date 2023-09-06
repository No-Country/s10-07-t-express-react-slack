import { Request, Response } from "express";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { validateWorkSpace } from "../../validations/workSpace";
import { ChannelsModel } from "../../models/Channels";

export const workSpace = async (req: Request, res: Response) => {
  const workSpace = req.body as IWorkSpace;

  try {
    const validations = await validateWorkSpace(workSpace);


    const existWorkSpace = await WorkSpaceModel.findOne({ nameWorkSpace: validations.nameWorkSpace });
    
    if (existWorkSpace) {
      return res.status(401).json({ error: "Este espacio de trabajo ya existe" })
    }

    const newWorkSpace = await WorkSpaceModel.create({
      userId: workSpace.userId,
      nameWorkSpace: validations.nameWorkSpace,
      // fullName: workSpace.fullName
    });
    
    const defaultChannel = await ChannelsModel.create({
      workSpaceId: newWorkSpace._id
    });

    await defaultChannel.save();

    const channelPush = []
    channelPush.push(defaultChannel._id)
    await WorkSpaceModel.updateOne({_id: newWorkSpace._id}, {channelsId: channelPush})

    if (newWorkSpace) {
      return res.status(201).json({
        msg: "Se creo con exito el espacio de trabajo",
        data: newWorkSpace
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
