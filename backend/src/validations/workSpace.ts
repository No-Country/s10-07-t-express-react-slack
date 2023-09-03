import { IWorkSpace } from "../../../interface/IWorkSpace";
import { validationEmail } from "./items/gmail";
import { validationFullName, validationName } from "./items/name";


export const validateWorkSpace = async (workSpace: IWorkSpace) => {

  if (!workSpace.nameWorkSpace) {
    throw new Error("Todos los campos son requeridos")
  }

  validationName(workSpace.nameWorkSpace)

  return workSpace
}