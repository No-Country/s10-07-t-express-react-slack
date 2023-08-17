import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"

export interface IGroup {
  name: string,
  email: string,
  count?: Number
  user: SchemaDefinitionProperty<IUser[]>

}