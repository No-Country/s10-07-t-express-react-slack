import { Schema, model } from "mongoose";
import { IWorkSpace } from "../../../interface/IWorkSpace";

const workSpaceSchema = new Schema<IWorkSpace>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    nameWorkSpace: {
      type: String,
      require: true,
    },
    channels: {
      type: Schema.Types.Array,
      ref: "Channel",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const WorkSpaceModel = model<IWorkSpace>("WorkSpace", workSpaceSchema);
