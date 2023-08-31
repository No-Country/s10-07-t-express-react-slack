import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IChannel {
  workSpace: string;
  nameChannel: string;
  userId: string[]
}

const initialState: IChannel = {
  workSpace: "",
  nameChannel: "",
  userId: [],
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    addMember: (state: IChannel, action: PayloadAction<string>) => {
      state.nameChannel === action.payload
    },
    getChannel: (state: IChannel, action: PayloadAction<string>) => {
      state.workSpace = action.payload
    },
    // deleteMember: (state, action: PayloadAction<string>) => {
    //   state.members = state.members.filter(member => member !== action.payload)
    // },
    setName: (state, action: PayloadAction<string>) => {
      state.workSpace = action.payload
    }
  },
})

export const { addMember, getChannel, setName } = channelSlice.actions
