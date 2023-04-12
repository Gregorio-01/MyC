import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLoading: false,
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
  },
})

// Action creators are generated for each case reducer function
export const { setUsers, startLoadingUsers } = usersSlice.actions

export default usersSlice.reducer
