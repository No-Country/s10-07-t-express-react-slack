import { Request, Response } from "express";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { validateWorkSpace } from "../../validations/workSpace";

export const workSpace = async (req: Request, res: Response) => {
  const workSpace = req.body as IWorkSpace;

  try {
    const validations = await validateWorkSpace(workSpace);

    // const allSpace = await WorkSpaceModel.findOne({
    //   nameWorkSpace: validations.nameWorkSpace,
    // });

    // if (!allSpace) {
    //   return res.status(400).json({
    //     error: " No hay ningun espacio de trabajo",
    //   });
    // }

    const newWorkSpace = new WorkSpaceModel({
      userId: workSpace.userId,
      nameWorkSpace: validations.nameWorkSpace,
      channels: workSpace.channels
    });

    await newWorkSpace.save();

    if (newWorkSpace) {
      return res.status(201).json({
        message: "Se creo con exito el espacio de trabajo",
        newWorkSpace
      });
    }
  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message });
  }
};
