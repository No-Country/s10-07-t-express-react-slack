import { Router } from "express"
import { createUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { recoverPassword } from "../services/crudUser/recoverPassword"
import { resetPassword } from "../services/crudUser/resetPassword"
import { loginGoogle } from "../services/crudUser/loginGoogle"
import { me } from "../services/crudUser/me"
import { authToken } from "../middlewares/authToken"
import { allUsers } from "../services/crudUser/get"

export const usersRoutes = Router()
const USERS = "/users"
const USER = "/user"

const LOGIN = "/auth"
const LOGINGOOGLE = "/authgoogle"
const RECOVER_PASSWORD = "/recover-password"
const RESET_PASSWORD = "/reset-password/:id"
const ME = "/me"
const AUTH_TOKEN = "/authToken"
usersRoutes.post(`${USER}`, createUser)

usersRoutes.post(`${LOGIN}`, loginUser)
usersRoutes.post(`${LOGINGOOGLE}`, loginGoogle)

usersRoutes.post(`${RECOVER_PASSWORD}`, recoverPassword)

usersRoutes.post(`${RESET_PASSWORD}`, resetPassword)

usersRoutes.get(`${ME}`, me)
usersRoutes.get(`${USERS}`, allUsers)

usersRoutes.get(`${AUTH_TOKEN}`, authToken)
