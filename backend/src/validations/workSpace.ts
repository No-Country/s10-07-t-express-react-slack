import { IWorkSpace } from "../../../interface/IWorkSpace";
import { validationEmail } from "./items/gmail";
import { validationFullName, validationWorkSpace } from "./items/name";




export const validateWorkSpace = async (workSpace: IWorkSpace) => {

  if (!workSpace.channels && !workSpace.nameWorkSpace) {
    throw new Error("Todos los campos son requeridos")
  }


  validationWorkSpace(workSpace.nameWorkSpace)

  validationEmail(workSpace.emailWorkSpace)



  return workSpace
}