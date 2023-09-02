import { Schema, model } from "mongoose";
import { IChannels } from '../../../interface/IChannels';
// import { IMessage } from "../../../interface/IMessage"
// import { channels } from '../services/CrudChannels/post';

const channelsSchema = new Schema<IChannels>(
  {
    channels: {
      type: String,
      require: true,
    },
    nameWorkSpaceId: {
      type: Schema.Types.Array,
      ref: "WorkSpace",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const ChannelsModel = model<IChannels>("Channel", channelsSchema);