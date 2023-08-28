import { Request, Response } from "express";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { validateWorkSpace } from "../../validations/workSpace";
// import { hashedPassword } from '../../helper/bcrypts';
// import { validateRegister } from "../../validations/register";



export const workSpace = async (req: Request, res: Response) => {

  const workSpace = req.body as IWorkSpace;



  try {

    const validations = await validateWorkSpace(workSpace);


    const allSpace = await WorkSpaceModel.findOne(
      {
        emailWorkSpace: validations.emailWorkSpace
      }
    )

    if (allSpace) {
      return res.status(400).json({ error: " No hay ningun espacio de trabajo", allSpace })
    }


    const newWorkSpace = new WorkSpaceModel(
      {
        nameWorkSpace: validations.nameWorkSpace,
        channels: validations.channels,
        emailWorkSpace: validations.emailWorkSpace

      }
    )

    await newWorkSpace.save()


    if (newWorkSpace) {
      return res.status(201).json({ message: "Se creo con exito el espacio de trabajo" })
    }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}