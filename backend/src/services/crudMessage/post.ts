import { Request, Response } from "express";
import { IMessage } from "../../../../interface/IMessage";
import { MessageModel } from "../../models/Message";

export const createMessage = async (req: Request, res: Response) => {

  const params = req.body as IMessage;
  const message = new MessageModel()
  message.message = params.message
  message.from = params.from

  try {

    const newMessage = await MessageModel.create({
      message: message.message,

      // workSpaceId: message.workSpaceId,
      // userId: message.userId
    })

    if (newMessage) {
      return res.status(201).json({
        message: "Se ah creado con exito un message",
        newMessage
      })
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}