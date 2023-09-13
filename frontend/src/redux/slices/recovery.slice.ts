import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface PasswordRecovery {
  loading: boolean,
  error: string,
  successMessage: string,
}

const initialState: PasswordRecovery = {
  loading: false,
  error: "",
  successMessage: "",
}

export const recoverySlice = createSlice({
    name: 'passwordRecovery',
    initialState,
    reducers: {
      recoveryRequest: (state) => {
        state.loading = true;
        state.error = "";
        state.successMessage = "";
      },
      recoverySuccess: (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      },
      recoveryFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action?.payload;
      },
    },
  });
  
  export const { recoveryRequest, recoverySuccess, recoveryFailure } = recoverySlice.actions;
 