import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  createdProject: '',
  deletedProject: '',
  editedProject: ''
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setCreatedProject: (state, action) => {
      state.createdProject = action.payload;
    },
    setDeletedProject: (state, action) => {
      state.deletedProject = action.payload;
    },
    setEditedProject: (state, action) => {
      state.editedProject = action.payload
    },
    setClean: (state, action) => {
      state[action.payload] = ''
    }
  },
});

// Action creators are generated for each case reducer function
export const { setProjects, setCreatedProject, setDeletedProject, setEditedProject, setClean } = projectsSlice.actions

export default projectsSlice.reducer;