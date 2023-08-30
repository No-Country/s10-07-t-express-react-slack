import { configureStore } from '@reduxjs/toolkit'
import { userSlice, workspaceSlice } from './index'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workspace: workspaceSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
