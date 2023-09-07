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
exports.getMyWorkSpaces = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const WorkSpace_1 = require("../../models/WorkSpace");
const Users_1 = require("../../models/Users");
const { TOKEN } = process.env;
const getMyWorkSpaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.headers['authorization']) {
            const token = req.headers['authorization'];
            const payload = jsonwebtoken_1.default.verify(token, TOKEN);
            const user = yield Users_1.Usermodel.findOne({ email: payload.id });
            if (!user) {
                return res.status(400).json({ msg: "No token" });
            }
            const workspaces = yield WorkSpace_1.WorkSpaceModel.find({ $or: [{ members: user._id, }, { userId: user._id }] });
            if (!workspaces) {
                return res.status(400).json({ error: "No hay espacios de trabajo" });
            }
            return res.status(200).json({ msg: "Espacios de trabajo ", workspaces });
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.getMyWorkSpaces = getMyWorkSpaces;
