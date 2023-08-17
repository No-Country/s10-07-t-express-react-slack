import { Router } from "express"

import { usersRoutes } from "./user.routes"
import { channelsRoutes } from "./channels.routes"

export const router = Router()

router.use(usersRoutes)

router.use(channelsRoutes)