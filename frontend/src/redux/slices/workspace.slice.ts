import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';

export interface ChannelProps {
  name: string;
  _id: string;
}

interface UserProps {
  profileImage: string;
  _id: string;
  fullName: string;
  email: string;
}

interface BodyJoinMembers {
  members: string[]
}

interface Workspace {
  nameWorkSpace: string;
  userId: string;
  _id: string;
  members?: string[] | UserProps[];
  loading?: string;
  channelsId: ChannelProps[] | string[];
  msg?: string
}

interface ResponseAxios {
  data: Workspace;
  msg: string;
}

interface CreateWorkspace {
  nameWorkSpace: string;
  userId: string;
}

const initialState: Workspace = {
  nameWorkSpace: "",
  userId: "",
  _id: "",
  members: [],
  loading: "idle",
  channelsId: [],
  msg: ""
}

export const createWorkspace = createAsyncThunk('workspace/create', async (body: CreateWorkspace) => {
  const response = await axios.post("http://localhost:3001/workSpace", body) as AxiosResponse<ResponseAxios>
  
  return {...response.data.data, msg: response.data.msg}
})

export const joinMembers = createAsyncThunk('workspace/members', async (body: string[]) => {
  const workspaceId = localStorage.getItem("workspaceId")
  console.log(workspaceId, body)
  const response = await axios.post<BodyJoinMembers>(`http://localhost:3001/joinWorkSpace/${workspaceId}`, {emails: body}) as AxiosResponse<Workspace>

  return response.data
})

export const getOneWorkspace = createAsyncThunk('workspace/getone', async (id: string | any) => {
  const {data} = await axios(`http://localhost:3001/oneworkspace/${id}`) as AxiosResponse<ResponseAxios>
  return data.data
})

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<any>) => {
      if(state.members) state.members.push(action.payload)
    },
    deleteMember: (state, action: PayloadAction<any>) => {
      if(state.members){
        const index = state.members.indexOf(action.payload)
        if(index !== -1){
          state.members.splice(index)
        }
      }
    },
    setName: (state, action: PayloadAction<string>) => {
      state.nameWorkSpace = action.payload
    }
  },
  extraReducers(builder){
    builder
      .addCase(createWorkspace.fulfilled, (state, action) => {
        state.loading = "success"
        state._id = action.payload._id
        state.msg = action.payload.msg
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        state.loading = "rejected"
        state.msg = action.error.message
      })
      .addCase(joinMembers.fulfilled, (state, action) => {
        state.loading = "success"
        state.msg = action.payload.msg
        return action.payload;
      })
      .addCase(getOneWorkspace.fulfilled, (state, action) => {
        state.loading = "success"
        state._id = action.payload._id
        state.nameWorkSpace = action.payload.nameWorkSpace
        state.members = action.payload.members
        state.channelsId = action.payload.channelsId
      })
  }
})

export const { addMember, deleteMember, setName } = workspaceSlice.actions
export default workspaceSlice.reducer;
