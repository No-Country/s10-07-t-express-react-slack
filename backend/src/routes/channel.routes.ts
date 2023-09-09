import { Router } from "express"
import { allChannels } from "../services/CrudChannels/get";
import { channels } from "../services/CrudChannels/post";
import { leaveChannel } from "../services/CrudChannels/leaveChannel";


export const channelsRoutes = Router()


// ─── Canales ─────────────────────────────────────────────────────────────────

const CHANNEL = "/channel/:idWorkspace";
channelsRoutes.post(`${CHANNEL}`, channels)

const CHANNELS = "/channels";
channelsRoutes.get(`${CHANNELS}`, allChannels)

const LEAVE_CHANNEL = "/channels/leave-channel/:idWorkspace/:idUser";
channelsRoutes.post(`${LEAVE_CHANNEL}`, leaveChannel)
