import { Router } from "express"
import { createUser } from "../services/userServices"


export const usersRoutes = Router()

const USERS = "USERS"
const USER = "USER"

usersRoutes.post(`/${USER}`, createUser)