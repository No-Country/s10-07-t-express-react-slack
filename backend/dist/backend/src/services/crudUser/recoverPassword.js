"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverPassword = void 0;
const Users_1 = require("../../models/Users");
const JwtToken_1 = require("../../helper/JwtToken");
const nodemailer_1 = __importDefault(require("nodemailer"));
const { PORT, WEB_PAGE, NODEMAILER_EMAIL, NODEMAILER_PASS_CODE } = process.env;
const recoverPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    try {
        const existUser = yield Users_1.Usermodel.findOne({ email: email });
        if (!existUser) {
            return res.status(401).json({ error: "El correo no está registrado" });
        }
        const token = yield (0, JwtToken_1.generateToken)(existUser.email);
        var verificationLink = `https://${WEB_PAGE}:${PORT}/auth/new-password/${existUser._id}/${token}`;
        /*
        * Generar un enlace para la recuperación de la cuenta
        * Enviar un correo con el enlace al usuario
        */
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: NODEMAILER_EMAIL,
                pass: NODEMAILER_PASS_CODE,
            },
            logger: true
        });
        const info = yield transporter.sendMail({
            from: '"Reset password " <spimentelm1201@gmail.com>',
            to: existUser.email,
            subject: "Reset Password Link",
            html: `Hola<strong> ${existUser.fullName} </strong>, por favor haz click en el siguiente enlace o pegalo en tu navegador para completar el proceso: 
        <a href="${verificationLink}">${verificationLink}</a>`
        });
        console.log(`Message sent to ${existUser.email}`, info.response);
        return res.status(200).json({ msg: "Revisa tu correo, se envió un enlace para restablecer tu contraseña." });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
});
exports.recoverPassword = recoverPassword;
