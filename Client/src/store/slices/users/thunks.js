import { usersApi } from "../../../API/usersAPI";
import { setUsers } from "./userSlice";
import { startLoadingUsers } from "./userSlice";

//esta son las llamadas asicronicas que utilizan las acciones comunes una vez que se resuelven
export const getUsers = () => {
  return async (dispatch) => {
     dispatch ( startLoadingUsers() );
         
    const {data} = await usersApi.get()
   
     dispatch( setUsers({
        users:data,
        }) )
  }
}