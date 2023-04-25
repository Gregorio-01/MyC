import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/users/userSlice'
import materialSlice from './slices/materials/materialSlice'
import associateSlice from './slices/associates/associateSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    materials: materialSlice,
    associates: associateSlice
  },
})