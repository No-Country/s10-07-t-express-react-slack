import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUserAux } from '../../interfaces/user'
import axios, { AxiosResponse } from 'axios'

interface ResponseAxios {
  data: IUserAux
}

const initialState: IUserAux = {
  fullName: "",
  email: "",
  _id: ""
}

export const validateUser = createAsyncThunk('user/validate', async () => {
  const token = localStorage.getItem("userToken")
  const response = await axios("http://localhost:3001/me", {
    headers: {
      Authorization: token
    }
  }) as AxiosResponse<ResponseAxios>

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
        state = action.payload
        return action.payload;
      })
  }
})

export const {  } = userSlice.actions
export default userSlice.reducer;
