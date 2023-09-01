import { Request, Response } from "express"
import { IUser } from "../../../../interface/IUser"
import { Usermodel } from "../../models/Users"
import { generateToken } from "../../helper/JwtToken"

export const loginGoogle = async (req: Request, res: Response) => {
  const {email, loginGoogle, fullName, profileImage} = req.body as IUser
  
  try {
    if(!email) throw new Error("El email es requerido.");

    const existUser = await Usermodel.findOne({ email });

    if(existUser && existUser.email){
      const token = await generateToken(existUser.email);

      return res.status(201).json({
        data: {message: "Usuario logueado con exito", 
        token}
      });
    }

    const newUser = new Usermodel({
      fullName,
      email,
      loginGoogle,
      profileImage
    });
    
    await newUser.save();
    const token = await generateToken(newUser.email);

    if (newUser) {
      return res.status(201).json({
        message: "Usuario creado con exito", 
        data: token
      });
    }
  } catch (error) {
    if (error instanceof Error) return res.status(400).json({ error: error.message });
  }
}
