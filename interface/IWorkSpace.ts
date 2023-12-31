import { SchemaDefinitionProperty } from 'mongoose'
import { IUser } from './IUser'
import { IChannels } from './IChannels'
// import { IMessages } from "./IMessage"

export interface IWorkSpace {
  userId: SchemaDefinitionProperty<IUser>
  fullName: string
  // channels: string
  members: SchemaDefinitionProperty<IUser>
  nameWorkSpace: string
  count?: Number
  channelsId: SchemaDefinitionProperty<IChannels>[];
  image: string
  // channels: SchemaDefinitionProperty<IMessages[]>
}
