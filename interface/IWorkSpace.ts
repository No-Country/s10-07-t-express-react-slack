import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"
import { IChannel } from "./IChannel"

export interface IWorkSpace {
  userId: SchemaDefinitionProperty<IUser>
  nameWorkSpace: string,
  count?: Number
  channels: SchemaDefinitionProperty<IChannel[]>

}