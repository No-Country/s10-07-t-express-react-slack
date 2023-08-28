import { dominiosPermitidosRegex, emailRegex } from "../../helper/regex";

export const validationEmail = (gmail: string): string => {

  if (!gmail) {
    throw new Error('Debe ingresar un correo');
  }

  if (!emailRegex.test(gmail) || !dominiosPermitidosRegex.test(gmail)) {
    throw new Error('Correo invalido vuelva a intentarlo');
  }

  return gmail;
}