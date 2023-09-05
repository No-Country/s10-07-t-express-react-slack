import { Router } from "express"
import { allChannels } from "../services/CrudChannels/get";
import { channels } from "../services/CrudChannels/post";


export const channelsRoutes = Router()


// ─── Canales ─────────────────────────────────────────────────────────────────

const CHANNEL = "/channel";
channelsRoutes.post(`${CHANNEL}`, channels)

const CHANNELS = "/channels";
channelsRoutes.get(`${CHANNELS}`, allChannels)

