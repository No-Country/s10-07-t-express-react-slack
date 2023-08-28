import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"


export const channelsRoutes = Router()

const WORKSPACE = "/workSpace"

channelsRoutes.post(`${WORKSPACE}`, workSpace)