import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLoading: false,
  actualUser: {},
  updatedUser: '',
  projects: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true
    },
    setUsers: (state, action) => {
      state.isLoading = false
      state.users = action.payload.users
    },
    setActualUser: (state, action) => {
      state.actualUser = action.payload;
    },
    setUpdatedUser: (state, action) => {
      state.updatedUser = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsers, startLoadingUsers, setActualUser, setUpdatedUser, setProjects } = usersSlice.actions

export default usersSlice.reducer