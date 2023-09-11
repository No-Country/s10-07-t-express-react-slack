import { Request, Response } from "express"
import { ChannelsModel } from "../../models/Channels"
import { WorkSpaceModel } from "../../models/WorkSpace"
import { IWorkSpace } from "../../../../interface/IWorkSpace"

export const deleteChannel = async (req: Request, res: Response) => {
    const channel = req.params.idChannel
    try {
      const channel1 = await ChannelsModel.findById(channel)
      
     // const workspace = await WorkSpaceModel.find({ channelsId: { $eq: channel } } )
      if(channel1){
        await WorkSpaceModel.updateOne({_id: channel1.workSpaceId},{$pull: {channelsId: channel1._id}})
        await ChannelsModel.findByIdAndDelete(channel)
        //await WorkSpaceModel.updateOne({_id: workspace._id},{$pull: {channelsId: channel}})
        return res.status(201).json({ msg: "Canal eliminado." })
      }
      
      return res.status(400).json({ error: "El canal no existe." })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }
    }
}