import { createSlice } from '@reduxjs/toolkit'

export const resetSlice = createSlice({
    name: 'passwordReset',
    initialState: {
      loading: false,
      error: null,
      successMessage: null,
    },
    reducers: {
      resetRequest: (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      },
      resetSuccess: (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      },
      resetFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { resetRequest, resetSuccess, resetFailure } = resetSlice.actions;