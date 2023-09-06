import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { joinToWorkspace } from "../services/crudWorkSpace/joinWorkspace"
import { leaveFromWorkspace } from "../services/crudWorkSpace/leftWorkspace"
import { joinListToWorkspace } from "../services/crudWorkSpace/joinListToWorkspace"
import { getMyWorkSpaces } from "../services/crudWorkSpace/getMyWorkspaces"
import { putWorkSpace } from "../services/crudWorkSpace/put"
import { allWorkSpace } from "../services/crudWorkSpace/get"
import { deleteWorkSpace } from "../services/crudWorkSpace/delete"


export const workSpacesRoutes = Router()

// ─── Espacio De Trabajo ──────────────────────────────────────────────────────

const WORKSPACES = "/workSpaces"
const WORKSPACE = "/workSpace"
const UP_WORKSPACE = "/workSpace/:id"
const DELETE_WORKSPACE = "/workSpace/:id"
const JOIN_WORKSPACE = "/joinWorkSpace/:idWorkspace/:idUser"
const JOIN_LIST_WORKSPACE = "/joinWorkSpace/:idWorkspace"
const LEAVE_WORKSPACE = "/leaveWorkSpace/:idWorkspace/:idUser"

// ─── Mis espacios de Trabajo ──────────────────────────────────────────────────────
const MY_WORKSPACES = "/myWorkSpaces"


workSpacesRoutes.post(`${WORKSPACE}`, workSpace)
workSpacesRoutes.get(`${WORKSPACES}`, allWorkSpace)
workSpacesRoutes.put(`${UP_WORKSPACE}`, putWorkSpace)
workSpacesRoutes.delete(`${DELETE_WORKSPACE}`, deleteWorkSpace)
workSpacesRoutes.get(`${MY_WORKSPACES}`, getMyWorkSpaces)
workSpacesRoutes.put(`${JOIN_WORKSPACE}`, joinToWorkspace)
workSpacesRoutes.get(`${JOIN_WORKSPACE}`, joinToWorkspace)
workSpacesRoutes.post(`${JOIN_LIST_WORKSPACE}`, joinListToWorkspace)
workSpacesRoutes.put(`${LEAVE_WORKSPACE}`, leaveFromWorkspace)
