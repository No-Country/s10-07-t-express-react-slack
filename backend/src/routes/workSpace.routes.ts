import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { allWorkSpace } from "../services/crudWorkSpace/get"


export const workSpacesRoutes = Router()


// ─── Espacio De Trabajo ──────────────────────────────────────────────────────

const WORKSPACE = "/workSpace"
workSpacesRoutes.post(`${WORKSPACE}`, workSpace)

const WORKSPACES = "/workSpaces"
workSpacesRoutes.get(`${WORKSPACES}`, allWorkSpace)

