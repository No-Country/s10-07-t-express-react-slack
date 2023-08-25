import { Router } from "express"
import { createUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { recoverPassword } from "../services/crudUser/recoverPassword"
import { resetPassword } from "../services/crudUser/resetPassword"

export const usersRoutes = Router()
const USERS = "/users"
const USER = "/user"

const LOGIN = "/auth"
const RECOVER_PASSWORD = "/recover-password"
const RESET_PASSWORD = "/reset-password/:id/:token"

usersRoutes.post(`${USER}`, createUser)

usersRoutes.post(`${LOGIN}`, loginUser)

usersRoutes.post(`${RECOVER_PASSWORD}`, recoverPassword)

usersRoutes.post(`${RESET_PASSWORD}`, resetPassword)
