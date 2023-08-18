import { IUser } from "../../../interface/IUser";
import { validationEmail } from "./items/gmail";
import { validationPassword } from "./items/password";
import { Usermodel } from "../models/Users";

export const validateLogin = async (admin: IUser): Promise<IUser> => {

  if (!admin.email && !admin.password) {
    throw new Error("Todos los campos son requeridos")// OK
  }

  validationEmail(admin.email);

  const allUsers = await Usermodel.find({ email: admin.email })

  if (!allUsers.length) {
    throw new Error('Esta cuenta no está registrada');
  }

  validationPassword(admin.password);

  return admin;
}