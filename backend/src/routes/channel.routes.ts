import { Router } from "express"
import { createChannel } from "../services/channels/post";
import { allChannels } from "../services/channels/get";

export const channelsRoutes = Router()

const CHANNEL = "/channel";
const CHANNELS = "/channels";

channelsRoutes.post(`${CHANNEL}`, createChannel)
channelsRoutes.get(`${CHANNELS}`, allChannels)