import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/users/userSlice'
import materialSlice from './slices/materials/materialSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    materials: materialSlice
  },
})