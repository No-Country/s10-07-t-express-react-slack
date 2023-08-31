import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"
import { IMessages } from "./IMessage"

export interface IWorkSpace {
  userId: SchemaDefinitionProperty<IUser>
  nameWorkSpace: string,
  count?: Number
  channels: SchemaDefinitionProperty<IMessages[]>

}