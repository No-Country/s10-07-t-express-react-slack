import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './index'

export const store = configureStore({
  reducer: {
    user: counterSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
