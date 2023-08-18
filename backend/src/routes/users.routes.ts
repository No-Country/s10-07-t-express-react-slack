import { Router } from "express"
import { createUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"


export const usersRoutes = Router()
const USERS = "/users"
const USER = "/user"

const LOGIN = "/auth"

usersRoutes.post(`${USER}`, createUser)

usersRoutes.post(`${LOGIN}`, loginUser)
