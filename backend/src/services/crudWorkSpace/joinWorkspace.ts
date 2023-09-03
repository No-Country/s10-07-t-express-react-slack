import { Request, Response } from "express";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { Usermodel } from "../../models/Users";

export const joinToWorkspace = async (req: Request, res: Response) => {
    const idWorkspace = req.params.idWorkspace;
    const emailUser = req.params.email

    try{
        const existWorkspace = await WorkSpaceModel.findById(idWorkspace);
        if(!existWorkspace){
            return res.status(404).json({error: "El espacio de trabajo no existe."})
        }
        const userId = await Usermodel.findOne({email: emailUser})
        if(!userId){
            return res.status(404).json({error: "El email no está registrado."})
        }
        await WorkSpaceModel.updateOne({_id: idWorkspace},{$addToSet: {user: userId._id}})
        return res.status(200).json("Usuario agregado al espacio de trabajo.")
    } catch (error){
        if (error instanceof Error)
            return res.status(400).json({ error: error.message })
    }
}