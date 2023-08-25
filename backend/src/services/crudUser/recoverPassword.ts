import { Request, Response } from "express"
import { Usermodel } from "../../models/Users";
import { validateLogin } from "../../validations/login";
import { generateToken } from "../../helper/JwtToken";
import nodemailer from "nodemailer";
const { PORT } = process.env;

export const recoverPassword = async(req:Request,res: Response) => {
    const email = req.body.email
    try{
        const existUser = await Usermodel.findOne({ email: email });
    if (!existUser) {
        return res.status(401).json({ error: "This email is not registered" })
    }
    const token = await generateToken(existUser.email)
    var verificationLink = `https://localhost:${PORT}/auth/new-password/${existUser._id}/${token}`;
    /*
    * Generar un enlace para la recuperación de la cuenta
    * Enviar un correo con el enlace al usuario
    */
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'thegrozzo@gmail.com',
          pass: 'fvavagmrezedhpmg',
        },
        logger: true
      });
    const info = await transporter.sendMail({
        from: '"Reset password " <spimentelm1201@gmail.com>',
        to: existUser.email,
        subject: "Reset Password Link",
        html: `<strong>Hi X, please click on the following link, or paste this into your browser to complete the process:</strong>
        <a href="${verificationLink}">${verificationLink}</a>`
      });
    
    console.log("Message sent: %s", info.response);
    return res.status(200).json({ msg: "Check your email for a link to reset your password"})
    } catch (error){
        if(error instanceof Error){
            return res.status(400).json({ error: error.message });
        }
    }
}