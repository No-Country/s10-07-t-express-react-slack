import { configureStore } from '@reduxjs/toolkit'
import { userSlice, workspaceSlice, recoverySlice, resetSlice } from './index'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    workspace: workspaceSlice.reducer,
    passwordRecovery: recoverySlice.reducer,
    passwordReset: resetSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
