import { Router } from "express"
import { createUser } from "../services/crudUser/register"
import { loginUser } from "../services/crudUser/login"
import { recoverPassword } from "../services/crudUser/recoverPassword"
import { resetPassword } from "../services/crudUser/resetPassword"
import { loginGoogle } from "../services/crudUser/loginGoogle"
import { me } from "../services/crudUser/me"
import { authToken } from "../middlewares/authToken"
import { allUsers } from "../services/crudUser/get"
import { updateUser } from "../services/crudUser/put"
import { deleteUser } from "../services/crudUser/delete"

export const usersRoutes = Router()

// ───Registrar Usuarios ────────────────────────────────────────────────────────────────

const USER = "/user"
usersRoutes.post(`${USER}`, createUser)

const USERS = "/users"
usersRoutes.get(`${USERS}`, allUsers)

// ───Actualizar Usuario ────────────────────────────────────────────────────────────────

const USER_UPDATE = "/user/:id"
usersRoutes.put(`${USER_UPDATE}`, updateUser)

// ───Eliminar cuenta de Usuario ────────────────────────────────────────────────────────────────

const USER_DELETE = "/user/:id"
usersRoutes.delete(`${USER_DELETE}`, deleteUser)

// ─── Loguear Usuario ─────────────────────────────────────────────────────────

const LOGIN = "/auth"
usersRoutes.post(`${LOGIN}`, loginUser)

// ─── Loguear Usuario Con Google ──────────────────────────────────────────────

const LOGINGOOGLE = "/authgoogle"
usersRoutes.post(`${LOGINGOOGLE}`, loginGoogle)

// ─── Recuperar Y Resetear Contraseña ─────────────────────────────────────────

const RECOVER_PASSWORD = "/recover-password"
usersRoutes.post(`${RECOVER_PASSWORD}`, recoverPassword)

const RESET_PASSWORD = "/reset-password/:id"
usersRoutes.post(`${RESET_PASSWORD}`, resetPassword)


// ─── Middelware De Autenticacion ─────────────────────────────────────────────

const AUTH_TOKEN = "/authToken"
usersRoutes.get(`${AUTH_TOKEN}`, authToken)


const ME = "/me"
usersRoutes.get(`${ME}`, me)



