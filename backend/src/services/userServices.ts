// import { Request, Response } from "express";
import { Request, Response } from "express";
import { IUser } from "../../../interface/IUser";
import { Usermodel } from "../models/Users";


export const createUser = async (req: Request, res: Response) => {

  const user = req.body as IUser;


  try {

    if (!user.email || !user.password) {
      return res.status(400).json({ msg: "Both fields are required" })
    }

    const existUser = await Usermodel.find(
      {
        email: user.email
      }
    )

    if (!existUser) {
      return res.status(400).json({ error: " User already exists", existUser })
    }


    const newUser = new Usermodel(
      {
        name: user.name,
        email: user.email,
        password: user.password
      }
    )

    await newUser.save()

    if (newUser) {
      return res.status(201).json({ message: "User created successfully" })
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}