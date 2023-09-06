require('dotenv').config();
import nodemailer from "nodemailer";
import { validationEmail } from "../validations/items/gmail";
const { NODEMAILER_EMAIL,NODEMAILER_PASS_CODE } = process.env;

export const sendMail = async (email: string, link?: string, message?: string): Promise<void> => {
    const validEmail = validationEmail(email);
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: NODEMAILER_EMAIL,
          pass: NODEMAILER_PASS_CODE,
        }
      });
    const info = await transporter.sendMail({
        from: `"Connecta" <${NODEMAILER_EMAIL}>`,
        to: validEmail,
        subject: "Invitación para unirse a un espacio de trabajo",
        html: `${message}
        <a href="${link}">${link}</a>`
      });
    
    console.log(`Message sent to ${email}`, info.response);
} 