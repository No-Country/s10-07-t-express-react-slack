import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { allWorkSpace } from "../services/crudWorkSpace/get"


export const workSpacesRoutes = Router()

const WORKSPACES = "/workSpaces"
const WORKSPACE = "/workSpace"

workSpacesRoutes.post(`${WORKSPACE}`, workSpace)
workSpacesRoutes.get(`${WORKSPACES}`, allWorkSpace)