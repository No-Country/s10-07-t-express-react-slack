import Jwt from "jsonwebtoken"
const { TOKEN } = process.env;

export const generateToken = async (id: string): Promise<string> => {
  return Jwt.sign({ id }, TOKEN as string, { expiresIn: "2", });
} 