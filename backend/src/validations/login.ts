import { IUser } from "../../../interface/IUser";
import { validationEmail } from "./items/gmail";
import { validationPassword } from "./items/password";
import { Usermodel } from "../models/Users";

export const validateLogin = async (user: IUser): Promise<IUser> => {

  if (!user.email && !user.password) {
    throw new Error("All fields are required")
  }

  validationEmail(user.email);

  const allUsers = await Usermodel.find({ email: user.email })

  if (!allUsers.length) {
    throw new Error('This account is not registered');
  }

  validationPassword(user.password);

  return user;
}