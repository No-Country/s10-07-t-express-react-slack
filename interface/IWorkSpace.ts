import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"
import { IChannels } from "./IChannels"
// import { IMessages } from "./IMessage"

export interface IWorkSpace {

  userId: SchemaDefinitionProperty<IUser>
  // channels: string
  nameWorkSpace: string,
  count?: Number
  channelsId: SchemaDefinitionProperty<IChannels[]>

  // channels: SchemaDefinitionProperty<IMessages[]>

}