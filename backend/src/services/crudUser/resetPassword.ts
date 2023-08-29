import { Request, Response } from "express"
import { Usermodel } from "../../models/Users";
import { hashedPassword } from "../../helper/bcrypts";

export const resetPassword = async(req:Request, res: Response) => {
    try{
        const password = req.body.newPassword
        const {id,token} = req.params
        //const existUser = await Usermodel.findOne({email : req.body?.email});
        const existUser = await Usermodel.findById(id);
        if(!existUser){
            res.status(404).json({ error: "El correo no está registrado." })
        }
        const encrypted = await hashedPassword(password);
        await Usermodel.findByIdAndUpdate({_id: id},{password: encrypted})
        return res.status(201).send({ msg : "Contraseña actualizada exitosamente ...!"})
    }catch(error){
        if(error instanceof Error){
            return res.status(400).json({ error: error.message });
        }
    }
}