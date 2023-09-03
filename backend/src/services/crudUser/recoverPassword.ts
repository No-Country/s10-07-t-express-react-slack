import { Request, Response } from "express"
import { Usermodel } from "../../models/Users";
import { validateLogin } from "../../validations/login";
import { generateToken } from "../../helper/JwtToken";
import nodemailer from "nodemailer";
const { PORT, WEB_PAGE, NODEMAILER_EMAIL, NODEMAILER_PASS_CODE } = process.env;

export const recoverPassword = async (req: Request, res: Response) => {
  const email = req.body.email
  try {
    const existUser = await Usermodel.findOne({ email: email });
    if (!existUser) {
      return res.status(401).json({ error: "El correo no está registrado" })
    }
    const token = await generateToken(existUser.email)
    var verificationLink = `https://${WEB_PAGE}:${PORT}/auth/new-password/${existUser._id}/${token}`;
    /*
    * Generar un enlace para la recuperación de la cuenta
    * Enviar un correo con el enlace al usuario
    */
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
      from: '"Reset password " <spimentelm1201@gmail.com>',
      to: existUser.email,
      subject: "Reset Password Link",
      html: `Hola<strong> ${existUser.fullName} </strong>, por favor haz click en el siguiente enlace o pegalo en tu navegador para completar el proceso: 
        <a href="${verificationLink}">${verificationLink}</a>`
    });

    console.log(`Message sent to ${existUser.email}`, info.response);
    return res.status(200).json({ msg: "Revisa tu correo, se envió un enlace para restablecer tu contraseña." })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
}