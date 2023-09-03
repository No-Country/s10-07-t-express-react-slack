import { Request, Response } from "express";
import { IMessage } from "../../../../interface/IMessage";
import { MessageModel } from "../../models/Message";

export const createMessage = async (req: Request, res: Response) => {


  const message = req.body as IMessage;

  try {

    // const validations = await validateChat(message)

    const data = await MessageModel.create({
      message: message.message,
      from: message.from

      // workSpaceId: message.workSpaceId,
      // userId: message.userId
    })

    if (data) {
      return res.status(201).json({
        message: "Se Creo con exito el mensaje",
        data: data
      })
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}

