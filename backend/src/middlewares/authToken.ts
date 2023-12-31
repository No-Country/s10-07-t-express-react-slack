import Jwt from "jsonwebtoken";
import { Usermodel } from "../models/Users";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "../../../interface/IPayload";
const { TOKEN } = process.env

export const authToken = async (req: Request, res: Response, next: NextFunction) => {

  if (req.headers.authorization) {

    try {
      const token = req.headers.authorization.split(" ")[1]

      const payload = Jwt.verify(token, TOKEN as string) as IPayload

      await Usermodel.findOne({
        email: payload.id
      })

      return next()

    } catch (error) {
      return res.status(400).json({ msg: "Sesion y token invalido" })
    }
  }
  return next()
}