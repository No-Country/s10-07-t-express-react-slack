import dotenv from 'dotenv';
import { connect } from 'mongoose';
dotenv.config();
const { DB } = process.env;

export const dbConexion = async (): Promise<void> => {
  try {
    if (typeof DB === "string") {
      await connect(DB);
      console.log("MongoDb connected is OK!!");
    }
  } catch (error) {
    console.log("Error in conection for:", error)
  }
}