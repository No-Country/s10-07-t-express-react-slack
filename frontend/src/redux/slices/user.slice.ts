import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/user'
import axios, { AxiosResponse } from 'axios'

interface ResponseAxios {
  data: IUser
}

const initialState: IUser = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export const validateUser = createAsyncThunk('user/validate', async () => {
  const token = localStorage.getItem("userToken")
  const response = await axios("http://localhost:3001/me", {
    headers: {
      Authorization: token
    }
  }) as AxiosResponse<ResponseAxios>
console.log(response.data.data)
  return response.data.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(validateUser.fulfilled, (state, action) => {
        console.log(state.email)
        return action.payload;
      })
  }
})

export const {  } = userSlice.actions
export default userSlice.reducer;
