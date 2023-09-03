import { Schema, model } from "mongoose";
import { IMessage } from "../../../interface/IMessage"

const messageSchema = new Schema<IMessage>(
  {
    message: {
      type: String,
      require: true,
    },
    from: {
      type: String,
      require: true,
    },
    // workSpaceId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "WorkSpace",
    // },
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const MessageModel = model<IMessage>("Message", messageSchema);
