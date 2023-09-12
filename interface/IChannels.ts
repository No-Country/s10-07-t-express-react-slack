import { SchemaDefinitionProperty } from 'mongoose'
import { IUser } from './IUser'
import { IWorkSpace } from './IWorkSpace'
// import { IChannels } from "../interface/IChannels"

export interface IChannels {
  userId: SchemaDefinitionProperty<IUser>
  workSpaceId: SchemaDefinitionProperty<IWorkSpace>
  name: string
  messages: SchemaDefinitionProperty<IChannels>[]
  description: string
  // nameWorkSpace: string,
  // count?: Number
}
