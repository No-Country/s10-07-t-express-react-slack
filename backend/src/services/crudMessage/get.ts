import { Request, Response } from "express";
import { MessageModel } from "../../models/Message";
// import { IMessage } from "../../../../interface/IMessage";

export const allMessages = async (_req: Request, res: Response) => {

  try {
    const messages = await MessageModel.find()
    if (messages) {
      return res.json(messages)
    }
    return res.json({ message: "No hay mensaje" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
