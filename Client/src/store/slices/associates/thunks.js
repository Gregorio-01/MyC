import axios, { Axios } from "axios";
import { setAssociates } from "./associateSlice";

export function getAssociates() {
    return async function (dispatch) {
        try {
            let users = await axios.get(`http://localhost:3001/associates`);
            return dispatch(setAssociates(users.data))
        } catch (error) {
            return console.log('getallassociates error', (error))
        }
    }
}