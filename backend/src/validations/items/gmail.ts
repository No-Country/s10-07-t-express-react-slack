import { dominiosPermitidosRegex, emailRegex } from "../../helper/regex";

export const validationEmail = (gmail: string): string => {

  if (!gmail) {
    throw new Error('You must enter an email');
  }

  if (!emailRegex.test(gmail) || !dominiosPermitidosRegex.test(gmail)) {
    throw new Error('Email is invalid');
  }

  return gmail;
}