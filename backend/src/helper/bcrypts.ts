import { hash, compare } from "bcrypt"


export const hashedPassword = async (password: string): Promise<string> => {
  return await hash(password, 10)
}


export const passwordCorrecto = async (password: string, passwordHashado: string): Promise<boolean> => {
  return await compare(password, passwordHashado)
}