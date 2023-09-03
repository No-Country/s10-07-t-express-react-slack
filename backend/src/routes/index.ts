import { Router } from "express"

import { usersRoutes } from './users.routes';
import { workSpacesRoutes } from "./workSpace.routes"
import { channelsRoutes } from "./channel.routes";
import { messageRoutes } from "./message.routes";

export const router = Router()

router.use(usersRoutes)
router.use(workSpacesRoutes)
router.use(channelsRoutes)
router.use(messageRoutes)