import { Schema, model } from "mongoose";
import { IChannels } from '../../../interface/IChannels';
import { IMessage } from "../../../interface/IMessage"

const channelsSchema = new Schema<IChannels>(
  {
    name: {
      type: String,
      require: false,
      default: "General"
    },
    workSpaceId: {
      type: Schema.Types.ObjectId,
      ref: "WorkSpace",
    },
    description: {
      type: String,
      require: false,
    },
    messages: {
      // type: Schema.Types.ObjectId,
      type: Schema.Types.Array,
      ref: "Message",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const ChannelsModel = model<IChannels>("Channel", channelsSchema);
