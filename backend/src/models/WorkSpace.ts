import { Schema, model } from "mongoose";
import { IWorkSpace } from '../../../interface/IWorkSpace';



const workSpaceSchema = new Schema<IWorkSpace>(
  {
    nameWorkSpace: {
      type: String,
      require: true
    },
    count: {
      type: Number,
    },
    emailWorkSpace: {
      type: String,
      require: true
    },
    channels: {
      type: String,
      require: true
    },
    user: {
      type: Schema.Types.Array,
      ref: "User"
    }

  },
  {
    timestamps: true,
    versionKey: false
  })



export const WorkSpaceModel = model<IWorkSpace>("WorkSpace", workSpaceSchema)