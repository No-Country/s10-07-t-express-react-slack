import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMessages } from "../../../../interface/IMessage"
import axios, { AxiosResponse } from 'axios'
import { initialState } from './initialState'

// export const initialState: IMessage = {
//   workSpaceId: "",
//   message: "",
//   userId: "",
// }

export enum BACK {
  message = "/message"
}

export const createMessage = createAsyncThunk('message/create', async (body: IMessages) => {
  const response = await axios.post(`http://localhost:3001${BACK.message}`, body) as AxiosResponse<IMessages>
  return response.data
})

export const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMember: (state: IMessages, action: PayloadAction<string>) => {
      // [...state.messages, action.payload]
      state.message === action.payload
    },
    getChannel: (state: IMessages, action: PayloadAction<string>) => {
      state.message
      // state.messages = action.payload
    },
    // deleteMember: (state, action: PayloadAction<string>) => {
    //   state.members = state.members.filter(member => member !== action.payload)
    // },
    // setName: (state, action: PayloadAction<string>) => {
    //   state.workSpaceId = action.payload
    // }
  },
})

export const { addMember, getChannel } = messagesSlice.actions
