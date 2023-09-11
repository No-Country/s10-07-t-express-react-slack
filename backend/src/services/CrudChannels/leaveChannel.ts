import { Request, Response } from "express";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { IWorkSpace } from "../../../../interface/IWorkSpace";
import { Usermodel } from "../../models/Users";
import { ChannelsModel } from "../../models/Channels";

export const leaveChannel = async (req: Request, res: Response) => {
    const idChannel = req.params.idChannel;
    const idUser = req.params.idUser

    try{
        const existChannel = await ChannelsModel.findById(idChannel);
        if(!existChannel){
            return res.status(404).json({error: "El canal no existe."})
        }
        const userId = await Usermodel.findOne({_id: idUser})
        if(!userId){
            return res.status(404).json({error: "El email no está registrado."})
        }
        await WorkSpaceModel.updateOne({_id: idChannel},{$pull: {members: userId._id}})
        return res.status(200).json({msg: "Usuario retirado del canal."})
    } catch (error){
        if (error instanceof Error)
            return res.status(400).json({ error: error.message })
    }
}