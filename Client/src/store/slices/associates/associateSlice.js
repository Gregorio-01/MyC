import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    associates: [],
}

export const associateSlice = createSlice({
    name: 'associates',
    initialState,
    reducers: {
        setAssociates: (state, action) => {
            state.associates = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAssociates } = associateSlice.actions

export default associateSlice.reducer
