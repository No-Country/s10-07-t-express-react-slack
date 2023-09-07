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
exports.sendMail = void 0;
require('dotenv').config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const gmail_1 = require("../validations/items/gmail");
const { NODEMAILER_EMAIL, NODEMAILER_PASS_CODE } = process.env;
const sendMail = (email, link, message) => __awaiter(void 0, void 0, void 0, function* () {
    const validEmail = (0, gmail_1.validationEmail)(email);
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: NODEMAILER_EMAIL,
            pass: NODEMAILER_PASS_CODE,
        }
    });
    const info = yield transporter.sendMail({
        from: `"Connecta" <${NODEMAILER_EMAIL}>`,
        to: validEmail,
        subject: "Invitación para unirse a un espacio de trabajo",
        html: `${message}
        <a href="${link}">${link}</a>`
    });
    console.log(`Message sent to ${email}`, info.response);
});
exports.sendMail = sendMail;
