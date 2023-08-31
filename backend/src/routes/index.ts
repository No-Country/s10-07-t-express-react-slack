import { Router } from "express"

import { usersRoutes } from './users.routes';
import { workSpacesRoutes } from "./workSpace.routes"
import { messagesRoutes } from "./channel.routes";

export const router = Router()

router.use(usersRoutes)
router.use(workSpacesRoutes)
router.use(messagesRoutes)