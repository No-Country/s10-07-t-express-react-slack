import { Request, Response } from "express";
import { IUser } from "../../../../interface/IUser";
import { Usermodel } from "../../models/Users";
import { hashedPassword } from "../../helper/bcrypts";
import { validateRegister } from "../../validations/register";

export const createUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;

  try {
    const validations = validateRegister(user);

    const existUser = await Usermodel.findOne({
      email: validations.email,
    });

    if (existUser) {
      return res.status(400).json({ error: "El usuario ya existe", existUser });
    }

    const encrypted = await hashedPassword(validations.password);

    const newUser = new Usermodel({
      fullName: validations.fullName,
      email: validations.email,
      password: encrypted,
    });

    await newUser.save();

    if (newUser) {
      return res.status(201).json({
        message: "Usuario creado con exito", 
        newUser
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
