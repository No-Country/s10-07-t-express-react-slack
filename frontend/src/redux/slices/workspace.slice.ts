import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';

// userId: workSpace.userId,
//       nameWorkSpace: validations.nameWorkSpace,
//       channels: workSpace.channels

interface Workspace {
  nameWorkspace: string;
  userId: string;
  // members: string[]
}

const initialState: Workspace = {
  nameWorkspace: "",
  userId: "",
  // members: [],
}

export const createWorkspace = createAsyncThunk('workspace/create', async (body: Workspace) => {
  const response = await axios.post("http://localhost:3001/workSpaces", body) as AxiosResponse<Workspace>
  return response.data
})

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    // addMember: (state, action: PayloadAction<string>) => {
    //   state.members.push(action.payload)
    // },
    // deleteMember: (state, action: PayloadAction<string>) => {
    //   state.members = state.members.filter(member => member !== action.payload)
    // },
    setName: (state, action: PayloadAction<string>) => {
      state.nameWorkspace = action.payload
    }
  },
  extraReducers(builder){
    builder
      .addCase(createWorkspace.fulfilled, (state, action) => {
        state = action.payload
        return action.payload;
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        console.log(state)
        console.log(action.error, action.payload);
      })
  }
})

// export const { addMember, deleteMember, setName } = workspaceSlice.actions
export const { setName } = workspaceSlice.actions
export default workspaceSlice.reducer;
