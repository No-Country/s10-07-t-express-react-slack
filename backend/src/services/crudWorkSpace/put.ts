import { Request, Response } from "express";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { validateWorkSpace } from "../../validations/workSpace";

export const putWorkSpace = async (req: Request, res: Response) => {

  const dataWorkSpace = req.body as IWorkSpace;
  const idWorkSpace = req.params.id;

  try {
    const validations = await validateWorkSpace(dataWorkSpace);
    console.log(validations)
    await WorkSpaceModel.findByIdAndUpdate(idWorkSpace, validations);
    return res.status(201).json({ msg: "Actualizado con éxito" })

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}