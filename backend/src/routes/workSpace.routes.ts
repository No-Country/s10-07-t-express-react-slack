import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { joinToWorkspace } from "../services/crudWorkSpace/joinWorkspace"
import { leaveFromWorkspace } from "../services/crudWorkSpace/leftWorkspace"
import { joinListToWorkspace } from "../services/crudWorkSpace/joinListToWorkspace"
import { getMyWorkSpaces } from "../services/crudWorkSpace/getMyWorkspaces"
import { putWorkSpace } from "../services/crudWorkSpace/put"
import { allWorkSpace } from "../services/crudWorkSpace/get"


export const workSpacesRoutes = Router()

const WORKSPACES = "/workSpaces"
const WORKSPACE = "/workSpace"
const UP_WORKSPACE = "/workSpace/:id"
const JOIN_WORKSPACE = "/joinWorkSpace/:idWorkspace/:email"
const JOIN_LIST_WORKSPACE = "/joinWorkSpace/:idWorkspace"
const MY_WORKSPACES = "/workSpaces"
const LEAVE_WORKSPACE = "/leaveWorkSpace/:idWorkspace/:email"

workSpacesRoutes.post(`${WORKSPACE}`, workSpace)
workSpacesRoutes.get(`${WORKSPACES}`, allWorkSpace)
workSpacesRoutes.put(`${UP_WORKSPACE}`, putWorkSpace)
workSpacesRoutes.get(`${MY_WORKSPACES}`, getMyWorkSpaces)
workSpacesRoutes.put(`${JOIN_WORKSPACE}`, joinToWorkspace)
workSpacesRoutes.get(`${JOIN_WORKSPACE}`, joinToWorkspace)
workSpacesRoutes.post(`${JOIN_LIST_WORKSPACE}`, joinListToWorkspace)
workSpacesRoutes.put(`${LEAVE_WORKSPACE}`, leaveFromWorkspace)