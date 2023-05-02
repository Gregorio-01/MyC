import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/users/userSlice'
import materialSlice from './slices/materials/materialSlice'
import associateSlice from './slices/associates/associateSlice'
import categoriesSlice from './slices/categories/categoriesSlice'
import projectsSlice from './slices/projects/projectsSlice'

export const store = configureStore({
  reducer: {
    users: userSlice,
    projects: projectsSlice,
    materials: materialSlice,
    associates: associateSlice,
    categories: categoriesSlice
  },
});