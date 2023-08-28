import { regexPassword } from "../../helper/regex"

export const validationPassword = (password: string): string => {

  if (!regexPassword.test(password)) {

    throw new Error('Debe ingresar una contraseña que contenta 8 caracteres incluyendo: Mayuscula, minuscula, numero y un caracter especial(@, $, !, %, *, ?, _ , -, &)');
  }

  return password;
}