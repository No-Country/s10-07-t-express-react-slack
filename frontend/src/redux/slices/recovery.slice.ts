import { createSlice } from '@reduxjs/toolkit'

export const recoverySlice = createSlice({
    name: 'passwordRecovery',
    initialState: {
      loading: false,
      error: null,
      successMessage: null,
    },
    reducers: {
      recoveryRequest: (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      },
      recoverySuccess: (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      },
      recoveryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { recoveryRequest, recoverySuccess, recoveryFailure } = recoverySlice.actions;
 