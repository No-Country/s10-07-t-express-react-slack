import { SchemaDefinitionProperty } from "mongoose";
import { IWorkSpace } from "./IWorkSpace";
import { IUser } from "./IUser";

export interface IMessage {
  message: string,
  from: string
  // workSpaceId: SchemaDefinitionProperty<IWorkSpace>
  // userId: SchemaDefinitionProperty<IUser>
}
