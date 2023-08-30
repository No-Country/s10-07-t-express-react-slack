import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Workspace {
  nameWorkspace: string;
  emailWorkspace: string;
  members: string[]
}

const initialState: Workspace = {
  nameWorkspace: "",
  emailWorkspace: "",
  members: [],
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<string>) => {
      state.members.push(action.payload)
    },
    deleteMember: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter(member => member !== action.payload)
    },
    setName: (state, action: PayloadAction<string>) => {
      state.nameWorkspace = action.payload
    }
  },
})

export const { addMember, deleteMember, setName } = workspaceSlice.actions
