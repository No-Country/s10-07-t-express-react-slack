import { Router } from "express"

import { usersRoutes } from './users.routes';
import { channelsRoutes } from "./group.routes"

export const router = Router()

router.use(usersRoutes)
router.use(channelsRoutes)