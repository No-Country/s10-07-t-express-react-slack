require('dotenv').config();
import nodemailer from "nodemailer";
import { validationEmail } from "../validations/items/gmail";
const { PORT,WEB_PAGE,NODEMAILER_EMAIL,NODEMAILER_PASS_CODE } = process.env;

export const sendMail = async (email: string, link: string): Promise<void> => {
    const validEmail = validationEmail(email);
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: NODEMAILER_EMAIL,
          pass: NODEMAILER_PASS_CODE,
        },
        logger: true
      });
    const info = await transporter.sendMail({
        from: '"Connecta" <spimentelm1201@gmail.com>',
        to: validEmail,
        subject: "Invitación para unirse a un espacio de trabajo",
        html: `Hola, se te ha invitado a unirte a un grupo de trabajo, para hacerlo debes hacer click en el siguiente enlace o pegarlo en tu navegador para completar el proceso: 
        <a href="${link}">${link}</a>`
      });
    
    console.log(`Message sent to ${email}`, info.response);
} 