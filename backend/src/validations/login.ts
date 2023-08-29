import { IUser } from "../../../interface/IUser";
import { validationEmail } from "./items/gmail";
import { validationPassword } from "./items/password";
import { Usermodel } from "../models/Users";

export const validateLogin = async (user: IUser): Promise<IUser> => {

  if (!user.email && !user.password) {
    throw new Error("Todos los campos son requeridos")
  }

  validationEmail(user.email);

  const allUsers = await Usermodel.find({ email: user.email })

  if (!allUsers.length) {
    throw new Error('Esta cuenta no esta registrada');
  }

  validationPassword(user.password);

  return user;
}