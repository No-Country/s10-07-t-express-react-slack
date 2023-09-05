import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { WorkSpaceModel } from "../../models/WorkSpace";
import { IPayload } from "../../../../interface/IPayload";
import { Usermodel } from "../../models/Users";
const { TOKEN } = process.env

export const getMyWorkSpaces = async (req: Request, res: Response) => {

    try {

        if(req.headers['authorization']){
            const token:string = req.headers['authorization']
            const payload = Jwt.verify(token, TOKEN as string) as IPayload
            const user = await Usermodel.findOne({email: payload.id})
        
            if(!user){
                return res.status(400).json({msg: "No token"})
            }
            const workspaces = await WorkSpaceModel.find({$or :[{members: user._id,},{userId: user._id}]})

            if (!workspaces) {
            return res.status(400).json({ error: "No hay espacios de trabajo"})
            }
        
            return res.status(200).json({ msg: "Espacios de trabajo ",workspaces})
        }

    } catch (error) {
        if (error instanceof Error)
        return res.status(400).json({ error: error.message })
    }
}