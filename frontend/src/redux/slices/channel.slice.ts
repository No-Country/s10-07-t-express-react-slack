import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
// import { IMessage } from '../../../../interface/IMessage'

interface User {
  _id: string;
  fullName: string
}

interface IMessage {
  message: string
  userId: string | User
  channelsId: string
  workSpaceId: string
}

export interface ChannelState {
  name: string
  _id: string
  messages: string[] | IMessage[]
  description: string
}

interface Messages {
  _id: string,
  message: string,
  userId: User
}

interface ResponseAxios {
  channel : ChannelState
  messages: Messages
}

export const getChannel = createAsyncThunk(
  'channel/getChannels',
  async (body: any) => {
    const response = (await axios(
      `https://slack-clone-93lk.onrender.com/channels/${body._id}`,
    )) as AxiosResponse<ResponseAxios>
    const messages: any = response.data.messages
    const data: ChannelState = {...response.data.channel, messages}
    return data
  },
)

const initialState: ChannelState = {
  name: '',
  _id: '',
  messages: [],
  description: '',
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getChannel.fulfilled, (state, action) => {
      state.description = action.payload.description
      state.name = action.payload.name
      state._id = action.payload._id
      state.messages = action.payload.messages
    })
  },
})

export default channelSlice.reducer
