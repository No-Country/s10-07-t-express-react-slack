import { SchemaDefinitionProperty } from "mongoose";
import { IWorkSpace } from "./IWorkSpace";

export interface IUser {
  fullName: string,
  email: string,
  password: string,
  confirmPassword?: string,
  loginGoogle: boolean,
  profileImage: string,
  workSpace: SchemaDefinitionProperty<IWorkSpace[]>
}
