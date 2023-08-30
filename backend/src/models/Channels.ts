import { Schema, model } from "mongoose";
import { IChannel } from "../../../interface/IChannel"

const channelSchema = new Schema<IChannel>(
  {
    workSpace: {
      type: Schema.Types.ObjectId,
      ref: "WorkSpace",
    },
    nameChannel: {
      type: String,
      require: true,
    },
    count: {
      type: Number,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const ChannelModel = model<IChannel>("Channel", channelSchema);
