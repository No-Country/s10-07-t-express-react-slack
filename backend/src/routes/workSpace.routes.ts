import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { joinToWorkspace } from "../services/crudWorkSpace/joinWorkspace"
import { leaveFromWorkspace } from "../services/crudWorkSpace/leftWorkspace"
import { joinListToWorkspace } from "../services/crudWorkSpace/joinListToWorkspace"
import { getMyWorkSpaces } from "../services/crudWorkSpace/get"
import { putWorkSpace } from "../services/crudWorkSpace/put"


export const channelsRoutes = Router()

const WORKSPACE = "/workSpace"
const UP_WORKSPACE = "/workSpace/:id"
const JOIN_WORKSPACE = "/joinWorkSpace/:idWorkspace/:email"
const JOIN_LIST_WORKSPACE = "/joinWorkSpace/:idWorkspace"
const MY_WORKSPACES = "/workSpaces"
const LEAVE_WORKSPACE = "/leaveWorkSpace/:idWorkspace/:email"

channelsRoutes.post(`${WORKSPACE}`, workSpace)
channelsRoutes.put(`${UP_WORKSPACE}`, putWorkSpace)
channelsRoutes.get(`${MY_WORKSPACES}`, getMyWorkSpaces)
channelsRoutes.put(`${JOIN_WORKSPACE}`, joinToWorkspace)
channelsRoutes.get(`${JOIN_WORKSPACE}`, joinToWorkspace)
channelsRoutes.post(`${JOIN_LIST_WORKSPACE}`, joinListToWorkspace)
channelsRoutes.put(`${LEAVE_WORKSPACE}`, leaveFromWorkspace)