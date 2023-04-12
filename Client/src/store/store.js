import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/users/userSlice'

export const store = configureStore({
  reducer: {
    users: userSlice
  },
})