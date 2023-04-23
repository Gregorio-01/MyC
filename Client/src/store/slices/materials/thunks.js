import axios from 'axios'
import { setMaterials } from './materialSlice'

export const getAllMaterias = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get("http://localhost:3001/material")
            dispatch(setMaterials(response.data))
        }catch(error){
            return error.message
        }
    }
}



