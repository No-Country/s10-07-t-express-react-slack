import { Router } from "express"
import { createUser } from "../services/userServices"


export const usersRoutes = Router()
const USERS = "/users"
const USER = "/user"

usersRoutes.post(`${USER}`, createUser)