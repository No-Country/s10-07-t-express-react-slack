import { Schema, model } from "mongoose";
import { IMessage } from "../../../interface/IMessage"

const messageSchema = new Schema<IMessage>(
  {
    workSpaceId: {
      type: Schema.Types.ObjectId,
      ref: "WorkSpace",
    },
    // message: {
    //   type: String,
    //   from: String,
    //   // require: true,
    // },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const MessageModel = model<IMessage>("Message", messageSchema);
