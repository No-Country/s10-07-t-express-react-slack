import { configureStore } from '@reduxjs/toolkit'
import { userSlice, workspaceSlice } from './index'
import { channelSlice } from './slices/channel.slice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workspace: workspaceSlice.reducer,
    channel: channelSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
