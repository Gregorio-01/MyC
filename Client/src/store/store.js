import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/users/userSlice'
import associateSlice from './slices/associates/associateSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    associates: associateSlice
  },
})