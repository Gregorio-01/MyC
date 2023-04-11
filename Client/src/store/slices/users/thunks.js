import { usersApi } from "../../../API/usersAPI";
import { setUsers } from "./userSlice";
import { startLoadingUsers } from "./userSlice";


export const getUsers = ( page = 0) => {
  return async (dispatch, getState) => {
     dispatch ( startLoadingUsers() );
         
    const {data} = await usersApi.get()
   
     dispatch( setUsers({
        users:data,
        }) )
  }
}