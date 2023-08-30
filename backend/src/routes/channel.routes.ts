import { Router } from "express"
import { createChannel } from "../services/channels/post";

export const channelsRoutes = Router()

const CHANNEL = "/channel";

channelsRoutes.post(`${CHANNEL}`, createChannel)