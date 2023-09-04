import { Schema, model } from "mongoose";
import { IWorkSpace } from "../../../interface/IWorkSpace";

const workSpaceSchema = new Schema<IWorkSpace>(
  {
    nameWorkSpace: {
      type: String,
      require: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channelsId: {
      type: Schema.Types.Array,
      // type: Schema.Types.ObjectId,
      ref: "Channel",
    },
    members: {
      type: Schema.Types.Array,
      ref: "User"
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const WorkSpaceModel = model<IWorkSpace>("WorkSpace", workSpaceSchema);
