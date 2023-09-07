import { Request, Response } from "express";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { sendMail } from "../../helper/nodemailer";
import { Usermodel } from "../../models/Users";
const { PORT,WEB_PAGE,NODEMAILER_EMAIL,NODEMAILER_PASS_CODE } = process.env;
interface Data {
    msg: string;
    nonMembers: string[]
}
export const joinListToWorkspace = async (req: Request, res: Response) => {
    const idWorkspace = req.params.idWorkspace;
    const emailUsers: Array<string> = req.body.emails;
    const data: Data = {
        msg: "",
        nonMembers: []
    }
    try{
        const existWorkspace = await WorkSpaceModel.findOne({_id: idWorkspace}).populate({path: 'userId'});
        const owner = await Usermodel.findOne({_id:existWorkspace?.userId})
        if(!existWorkspace){
            return res.status(404).json({error: "El espacio de trabajo no existe."})
        }
        const message= `${owner?.fullName} te ha invitado a unirte al espacio de trabajo ${existWorkspace.nameWorkSpace}`
        emailUsers.forEach(async function (emaik) {
            const idForUser = await Usermodel.findOne({email: emaik})
            if(!idForUser){
                data.nonMembers.push(emaik)
                await sendMail(emaik,'http://localhost:5173/register',message)
            }else{
                sendMail(emaik,`http://${WEB_PAGE}:5173/workspaceinvitation/${existWorkspace._id}`, `Hola, ${owner?.fullName} te ha invitado a unirte a un grupo de trabajo ${existWorkspace.nameWorkSpace}, para hacerlo debes hacer click en el siguiente enlace o pegarlo en tu navegador para completar el proceso: ` )
            }
            
        })
        data.msg = "Los siguientes emails no pueden unirse al espacio de trabajo porque no son usuarios de connecta"
        return res.status(200).json({msg: "Invitaciones enviadas.",data})
    } catch (error){
        if (error instanceof Error)
            return res.status(400).json({ error: error.message })
    }
}
