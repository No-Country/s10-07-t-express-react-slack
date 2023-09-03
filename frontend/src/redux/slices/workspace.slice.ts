import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';

// userId: workSpace.userId,
//       nameWorkSpace: validations.nameWorkSpace,
//       channels: workSpace.channels

interface Workspace {
  nameWorkSpace: string;
  userId: string;
  // members: string[]
}

const initialState: Workspace = {
  nameWorkSpace: "",
  userId: "",
  // members: [],
}

export const createWorkspace = createAsyncThunk('workspace/create', async (body: Workspace) => {
  console.log(body)
  const response = await axios.post("http://localhost:3001/workSpace", body) as AxiosResponse<Workspace>
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
      state.nameWorkSpace = action.payload
    }
  },
  extraReducers(builder){
    builder
      .addCase(createWorkspace.fulfilled, (state, action) => {
        const workspace = {
          userId: action.payload.userId,
          nameWorkSpace: action.payload.nameWorkSpace
        }
        return workspace;
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        console.log(state)
        console.log(action.error, action.payload, action);
      })
  }
})

// export const { addMember, deleteMember, setName } = workspaceSlice.actions
export const { setName } = workspaceSlice.actions
export default workspaceSlice.reducer;
