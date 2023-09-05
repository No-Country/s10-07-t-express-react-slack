import { Request, Response } from "express";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { sendMail } from "../../helper/nodemailer";
import { Usermodel } from "../../models/Users";
const { PORT,WEB_PAGE,NODEMAILER_EMAIL,NODEMAILER_PASS_CODE } = process.env;

export const joinListToWorkspace = async (req: Request, res: Response) => {
    const idWorkspace = req.params.idWorkspace;
    const emailUsers: Array<string> = req.body.emails;

    try{
        const existWorkspace = await WorkSpaceModel.findById(idWorkspace);
        if(!existWorkspace){
            return res.status(404).json({error: "El espacio de trabajo no existe."})
        }
        //var invitationLink = `https://${WEB_PAGE}:${PORT}/auth/new-password/${existWorkspace}/${emailUsers}`;
        emailUsers.forEach(async email => {
            const idForUser = await Usermodel.findOne({email: email})
            sendMail(email,`http://${WEB_PAGE}:${PORT}/joinWorkspace/${existWorkspace._id}/${idForUser?._id}` )
        })
        //await WorkSpaceModel.updateOne({_id: idWorkspace},{$addToSet: {user: userId._id}})
        return res.status(200).json({msg: "Invitaciones enviadas."})
    } catch (error){
        if (error instanceof Error)
            return res.status(400).json({ error: error.message })
    }
}