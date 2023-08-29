import { Request, Response } from "express"
import { IUser } from "../../../../interface/IUser"
import { Usermodel } from "../../models/Users"
import { passwordCorrect } from "../../helper/bcrypts"
import { generateToken } from "../../helper/JwtToken"
import { validateLogin } from "../../validations/login"

export const loginUser = async (req: Request, res: Response) => {
  const user = req.body as IUser

  try {
    const validation = await validateLogin(user);

    const existUser = await Usermodel.findOne({ email: validation.email });

    if (!existUser) {
      return res.status(401).json({ error: "Esta cuenta no esta registrada" })
    }

    const passwordEncrypted = existUser.password

    const comparePassword = await passwordCorrect(validation.password, passwordEncrypted)

    if (comparePassword) {
      const token = await generateToken(existUser.email)

      const data = {
        existUser,
        token,
      }

      return res.status(200).json({ msg: "Session y token invalido", data })
    } else {
      return res.status(403).json({ error: "Contraseña invalida" })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    console.log(error)
  }
}
