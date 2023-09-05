import { fullName, NameChannel } from '../../helper/regex';

export const validationFullName = (name: string): string => {

  if (!name.match(fullName)) {
    throw new Error("Debes ingresar un nombre completo")
  }

  return name;
}


export const validationName = (name: string): string => {

  if (!name.match(NameChannel)) {
    throw new Error("Debes ingresar un nombre valido")
  }

  return name;
}

