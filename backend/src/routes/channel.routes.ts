import { Router } from "express"
import { createMessage } from "../services/messages/post";
import { allMessages } from "../services/messages/get";

export const messagesRoutes = Router()

const MESSAGE = "/message";
const MESSAGES = "/messages";

messagesRoutes.post(`${MESSAGE}`, createMessage)
messagesRoutes.get(`${MESSAGES}`, allMessages)