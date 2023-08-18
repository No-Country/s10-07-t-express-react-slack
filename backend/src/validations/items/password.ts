import { regexPassword } from "../../helper/regex"

export const validationPassword = (password: string): string => {

  if (!regexPassword.test(password)) {

    throw new Error('Password must contain at least 8 characters including: Uppercase, Lowercase, numbers and special characters(@, $, !, %, *, ?, _ , -, &)');
  }

  return password;
}