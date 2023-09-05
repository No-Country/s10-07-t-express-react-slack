import { Schema, model } from "mongoose";
import { IChannels } from '../../../interface/IChannels';
// import { IMessage } from "../../../interface/IMessage"

const channelsSchema = new Schema<IChannels>(
  {
    name: {
      type: String,
      require: true,
    },
    nameWorkSpaceId: {
      type: Schema.Types.Array,
      ref: "WorkSpace",
    },
    userId: {
      type: Schema.Types.Array,
      ref: "User",
    },
    // messageId: {
    //   type: Schema.Types.ObjectId,
    //   // type: Schema.Types.Array,
    //   ref: "Message",
    // },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const ChannelsModel = model<IChannels>("Channel", channelsSchema);
