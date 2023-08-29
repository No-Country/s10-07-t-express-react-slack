import { Router } from "express"

import { usersRoutes } from './users.routes';
import { channelsRoutes } from "./workSpace.routes"

export const router = Router()

router.use(usersRoutes)
router.use(channelsRoutes)