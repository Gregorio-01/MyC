import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLoading: false,
  actualUser: {},
  updatedUser: '',
  userProjects: [],
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
    setUserProjects: (state, action) => {
      state.userProjects = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUsers, startLoadingUsers, setActualUser, setUpdatedUser, setUserProjects } = usersSlice.actions

export default usersSlice.reducer