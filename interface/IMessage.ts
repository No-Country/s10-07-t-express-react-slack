import { SchemaDefinitionProperty } from "mongoose";
import { IWorkSpace } from "./IWorkSpace";
import { IUser } from "./IUser";

export interface IMessage {
  workSpaceId: SchemaDefinitionProperty<IWorkSpace>
  message: string,
  userId: SchemaDefinitionProperty<IUser>
}