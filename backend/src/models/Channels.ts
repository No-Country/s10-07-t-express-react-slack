import { Schema, model } from "mongoose";
import { IChannel } from "../../../interface/IChannel"

const channelSchema = new Schema<IChannel>(
  {
    workSpace: {
      type: Schema.Types.ObjectId,
      ref: "WorkSpace",
    },
    channel: {
      type: Object,
      require: true,
    },
    // nameChannel: {
    //   type: Object,
    //   require: true,
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

export const ChannelModel = model<IChannel>("Channel", channelSchema);
