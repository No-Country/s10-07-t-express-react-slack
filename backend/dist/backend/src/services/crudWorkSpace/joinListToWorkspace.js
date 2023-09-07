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
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinListToWorkspace = void 0;
const WorkSpace_1 = require("../../models/WorkSpace");
const nodemailer_1 = require("../../helper/nodemailer");
const Users_1 = require("../../models/Users");
const { PORT, WEB_PAGE, NODEMAILER_EMAIL, NODEMAILER_PASS_CODE } = process.env;
const joinListToWorkspace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idWorkspace = req.params.idWorkspace;
    const emailUsers = req.body.emails;
    const data = {
        msg: String,
        nonMembers: []
    };
    try {
        const existWorkspace = yield WorkSpace_1.WorkSpaceModel.findOne({ _id: idWorkspace }).populate({ path: 'userId' });
        const owner = yield Users_1.Usermodel.findOne({ _id: existWorkspace === null || existWorkspace === void 0 ? void 0 : existWorkspace.userId });
        if (!existWorkspace) {
            return res.status(404).json({ error: "El espacio de trabajo no existe." });
        }
        emailUsers.forEach(function (emaik) {
            return __awaiter(this, void 0, void 0, function* () {
                const idForUser = yield Users_1.Usermodel.findOne({ email: emaik });
                if (!idForUser) {
                    const message = `${owner === null || owner === void 0 ? void 0 : owner.fullName} te ha invitado a unirte al espacio de trabajo ${existWorkspace.nameWorkSpace}`;
                    yield (0, nodemailer_1.sendMail)(emaik, 'http://localhost:5173/register', message);
                }
                else {
                    (0, nodemailer_1.sendMail)(emaik, `http://${WEB_PAGE}:${PORT}/joinWorkspace/${existWorkspace._id}/${idForUser === null || idForUser === void 0 ? void 0 : idForUser._id}`, `Hola, ${owner === null || owner === void 0 ? void 0 : owner.fullName} te ha invitado a unirte a un grupo de trabajo ${existWorkspace.nameWorkSpace}, para hacerlo debes hacer click en el siguiente enlace o pegarlo en tu navegador para completar el proceso: `);
                }
            });
        });
        data.msg = "Los siguientes emails no pueden unirse al espacio de trabajo porque no son usuarios de connecta";
        return res.status(200).json({ msg: "Invitaciones enviadas.", data });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.joinListToWorkspace = joinListToWorkspace;
