import { Schema, model } from "mongoose";
import { IUser } from '../../../interface/IUser';



const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },

  },
  {
    timestamps: false,
    versionKey: false
  })





export const Usermodel = model<IUser>("User", userSchema)