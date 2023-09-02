import { SchemaDefinitionProperty } from "mongoose"
import { IUser } from "./IUser"
import { IWorkSpace } from "./IWorkSpace"
// import { IChannels } from "../interface/IChannels"

export interface IChannels {

  userId: SchemaDefinitionProperty<IUser>,
  nameWorkSpaceId: SchemaDefinitionProperty<IWorkSpace>,
  channels: string
  // channelsId: SchemaDefinitionProperty<IChannels[]>
  // nameWorkSpace: string,
  // count?: Number

}