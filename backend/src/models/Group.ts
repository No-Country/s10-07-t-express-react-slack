import { Schema, model } from "mongoose";
import { IGroup } from '../../../interface/IGroup';



const groupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      require: true
    },
    count: {
      type: Number,
    },
    user: {
      type: Schema.Types.Array,
      ref: "User"
    },
  },
  {
    timestamps: true,
    versionKey: false
  })



export const Groupmodel = model<IGroup>("Group", groupSchema)