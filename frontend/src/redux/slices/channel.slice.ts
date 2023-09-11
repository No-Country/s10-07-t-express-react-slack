import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';
import { IMessage } from '../../../../interface/IMessage';

export interface ChannelState {
  name: string;
  _id: string;
  messages: string[] | IMessage[];
  description: string
}

export const getChannel = createAsyncThunk('channel/getChannels', async (body: any) => {
  console.log("llega hasta aca", body)
  const response = await axios(`http://localhost:3001/channel/${body._id}`) as AxiosResponse<ChannelState>;

  return response.data
})

const initialState: ChannelState = {
  name: "",
  _id: "",
  messages: [],
  description: ""
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getChannel.fulfilled, (state, action) => {
        state.description = action.payload.description
        state.name = action.payload.name
        state._id = action.payload._id
        state.messages = action.payload.messages
      })
  }
})

export default channelSlice.reducer;

