import { IUser } from "../../../interface/IUser";
import { validationEmail } from "./items/gmail";
import { validationPassword } from "./items/password";
import { validationFullName } from "./items/name";

export const validateRegister = (user: IUser): IUser => {

  if (!user.fullName && !user.password && !user.email) {
    throw new Error("Todos los campos son requeridos")
  }

  validationFullName(user.fullName);

  validationEmail(user.email);

  validationPassword(user.password);

  if (validationPassword(user.password) !== user.confirmPassword) {
    throw new Error("Las contraseñas no coinciden")
  }

  return user;
}