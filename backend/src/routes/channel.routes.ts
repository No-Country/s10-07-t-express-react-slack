import { Router } from "express"
import { allChannels } from "../services/CrudChannels/get";
import { channels } from "../services/CrudChannels/post";
// import { createMessage } from "../services/crudMessage/post";
// import { allMessages } from "../services/crudMessage/get";

export const messagesRoutes = Router()


// ─── Canales ─────────────────────────────────────────────────────────────────

const MESSAGE = "/message";
messagesRoutes.post(`${MESSAGE}`, channels)

const MESSAGES = "/messages";
messagesRoutes.get(`${MESSAGES}`, allChannels)

