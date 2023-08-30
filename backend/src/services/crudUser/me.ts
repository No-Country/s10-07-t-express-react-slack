import Jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { IPayload } from "../../../../interface/IPayload";
import { Usermodel } from "../../models/Users";
const { TOKEN } = process.env

export const me = async (req: Request, res: Response) => {
  if (req.headers['authorization']) {
    try {
      const token = req.headers['authorization']
      console.log(token);
      const payload = Jwt.verify(token, TOKEN as string) as IPayload
      const userData = await Usermodel.findOne({
        email: payload.id
      }).select('-password')

      return res.status(200).json({ data: userData })
    } catch (error) {
      return res.status(400).json({ msg: "Token inválido" })
    }
  }
  return res.status(404).json({ msg: "Token no enviado" })
}
