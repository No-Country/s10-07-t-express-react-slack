import { Request, Response } from 'express'
import { ChannelsModel } from '../../models/Channels'
import { MessageModel } from '../../models/Message'
import { IMessage } from '../../../../interface/IMessage'
import { IChannels } from '../../../../interface/IChannels'

interface DataT {
  channel?: IChannels
  //messages: Array<IMessage>
}

export const getOneChannel = async (req: Request, res: Response) => {
  try {
    // const channel = await ChannelsModel.findById(req.params.idChannel).populate(
    //   'messages',
    //   ['message', 'nameWorkSpaceId', 'userId', 'channelsId']
    // )

    const channel = await ChannelsModel.findById(req.params.idChannel).populate(
      {
        path: 'messages',
        populate: { path: 'userId' }, // Esto carga la información completa del usuario
      }
    )

    const messages = await MessageModel.find({
      channelsId: req.params.idChannel,
    }).sort({ createdAt: -1 })
    if (channel) {
      const data: DataT = {
        channel: channel,
        //messages: messages
      }
      return res.status(200).json(channel)
    }
    return res.status(404).json({ msg: 'El canal no existe' })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
