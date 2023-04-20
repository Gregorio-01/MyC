import { usersApi } from "../../../API/usersAPI";
import { setUsers } from "./userSlice";
import { startLoadingUsers } from "./userSlice";
import { setActualUser } from './userSlice';

//esta son las llamadas asicronicas que utilizan las acciones comunes una vez que se resuelven
export const getUsers = () => {
  return async (dispatch) => {
     dispatch ( startLoadingUsers() );
         
    const {data} = await usersApi.get()
   
     dispatch( setUsers({
        users:data,
        }) )
  }
};

export const putUser = (updates) => {
  return async (dispatch) => {
    console.log(updates);
    const updatedUser = await usersApi.put('/:id', updates);
    dispatch( setActualUser(updatedUser.data));
  }
};