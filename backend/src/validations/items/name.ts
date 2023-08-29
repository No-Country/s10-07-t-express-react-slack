import { fullName, NameChannel } from '../../helper/regex';

export const validationFullName = (name: string): string => {

  if (!name.match(fullName)) {
    throw new Error("Debes ingresar un nombre completo")
  }

  return name;
}


export const validationWorkSpace = (name: string): string => {

  if (!name.match(NameChannel)) {
    throw new Error("Debes ingresar un nombre para el Canal")
  }

  return name;
}