import { Schema, model } from "mongoose";
import { IWorkSpace } from "../../../interface/IWorkSpace";

const workSpaceSchema = new Schema<IWorkSpace>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    nameWorkSpace: {
      type: String,
      require: true,
    },
    count: {
      type: Number,
    },
    channels: [{
      type: Schema.Types.ObjectId,
      ref: "Channel",
    }],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const WorkSpaceModel = model<IWorkSpace>("WorkSpace", workSpaceSchema);
