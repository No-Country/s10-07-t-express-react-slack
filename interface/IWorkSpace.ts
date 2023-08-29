import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"

export interface IWorkSpace {
  nameWorkSpace: string,
  emailWorkSpace: string,
  count?: Number
  user: SchemaDefinitionProperty<IUser[]>
  channels: string

}