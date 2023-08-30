import { SchemaDefinitionProperty } from "mongoose";
import { IWorkSpace } from "./IWorkSpace";
import { IUser } from "./IUser";

export type TChannel = {
  name: string
}

export interface IChannel {
  workSpace: SchemaDefinitionProperty<IWorkSpace>
  channel: TChannel,
  // nameChannel: TChannel,
  userId: SchemaDefinitionProperty<IUser>
}