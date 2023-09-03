import { Request, Response } from "express";
import { Usermodel } from "../../models/Users";

export const allUsers = async (_req: Request, res: Response) => {
  try {
    const users = await Usermodel.find()
    if (users.length) {
      return res.json(users)
    }
    return res.json({ message: "No hay info" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
  }
}