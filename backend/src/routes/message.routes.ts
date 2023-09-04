import { Router } from "express"
import { allMessages } from "../services/crudMessage/get";
import { createMessage } from "../services/crudMessage/post";


export const messageRoutes = Router()


// ─── Mensaje ─────────────────────────────────────────────────────────────────

const MESSAGE = "/message";
messageRoutes.post(`${MESSAGE}`, createMessage)

const MESSAGES = "/messages";
messageRoutes.get(`${MESSAGES}`, allMessages)

