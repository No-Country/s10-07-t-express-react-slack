import { configureStore } from '@reduxjs/toolkit'
import { counterSlice, recoverySlice } from './index'

export const store = configureStore({
  reducer: {
    user: counterSlice.reducer,
    passwordRecovery: recoverySlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
