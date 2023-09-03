import { Router } from "express"
import { allChannels } from "../services/CrudChannels/get";
import { channels } from "../services/CrudChannels/post";
// import { createMessage } from "../services/crudMessage/post";
// import { allMessages } from "../services/crudMessage/get";

export const messagesRoutes = Router()

const MESSAGE = "/message";
const MESSAGES = "/messages";

messagesRoutes.post(`${MESSAGE}`, channels)
messagesRoutes.get(`${MESSAGES}`, allChannels)
// messagesRoutes.post(`${MESSAGE}`, createMessage)