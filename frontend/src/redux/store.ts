import { configureStore } from '@reduxjs/toolkit'
import { userSlice, workspaceSlice } from './index'
import { messagesSlice } from './slices/message.slice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workspace: workspaceSlice.reducer,
    messages: messagesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
