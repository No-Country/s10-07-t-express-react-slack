import { Schema, model } from 'mongoose'
import { IMessage } from '../../../interface/IMessage'

const messageSchema = new Schema<IMessage>(
  {
    message: {
      type: String,
      require: true,
    },
    // from: {
    //   type: String,
    //   require: true,
    // },
    // workSpaceId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "WorkSpace",
    // },
    channelsId: {
      type: Schema.Types.Array,
      // type: Schema.Types.ObjectId,
      // type: Schema.Types.ObjectId,
      ref: 'Channel',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const MessageModel = model<IMessage>('Message', messageSchema)
