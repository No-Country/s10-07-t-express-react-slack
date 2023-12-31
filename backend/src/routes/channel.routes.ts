import { Router } from "express"
import { allChannels } from "../services/CrudChannels/get";
import { channels } from "../services/CrudChannels/post";
import { leaveChannel } from "../services/CrudChannels/leaveChannel";
import { deleteChannel } from "../services/CrudChannels/delete";
import { getOneChannel } from "../services/CrudChannels/getOne";
import { updateChannel } from "../services/CrudChannels/put";


export const channelsRoutes = Router()


// ─── Canales ─────────────────────────────────────────────────────────────────

const CHANNEL = "/channel/:idWorkspace";
channelsRoutes.post(`${CHANNEL}`, channels)

const CHANNELS = "/channels";
channelsRoutes.get(`${CHANNELS}`, allChannels)

const LEAVE_CHANNEL = "/channels/leave-channel/:idWorkspace/:idUser";
channelsRoutes.post(`${LEAVE_CHANNEL}`, leaveChannel)

const DELETE_CHANNEL = "/channel/:idChannel";
channelsRoutes.delete(`${DELETE_CHANNEL}`, deleteChannel)

const ONE_CHANNEL = "/channels/:idChannel";
channelsRoutes.get(`${ONE_CHANNEL}`, getOneChannel)

const UPDATE_CHANNEL = "/channels/:idChannel";
channelsRoutes.put(`${UPDATE_CHANNEL}`, updateChannel)
