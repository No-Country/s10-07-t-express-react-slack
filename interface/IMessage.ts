import { SchemaDefinitionProperty } from "mongoose";
import { IWorkSpace } from "./IWorkSpace";
import { IUser } from "./IUser";
import { IChannels } from "./IChannels";

export interface IMessage {
  message: SchemaDefinitionProperty<IChannels>
  userId: SchemaDefinitionProperty<IUser>
  // from: string
  channelsId: SchemaDefinitionProperty<IChannels>
  workSpaceId: SchemaDefinitionProperty<IWorkSpace>

}
