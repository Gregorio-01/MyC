import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  materials: [],
}

export const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers:{
        setMaterials: (state,action) =>{
            state.materials = action.payload
            // console.log(action.payload)
            // console.log(state.materials)
        }
    }
})

export const { setMaterials } = materialSlice.actions
export default materialSlice.reducer