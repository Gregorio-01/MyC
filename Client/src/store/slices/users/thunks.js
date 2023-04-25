import axios, { Axios } from "axios";
import {loginApi, userApi} from '../../../API/usersAPI'
import { setUsers } from "./userSlice";
import { startLoadingUsers } from "./userSlice";

//esta son las llamadas asicronicas que utilizan las acciones comunes una vez que se resuelven
export const getUsers = () => {
  return async (dispatch) => {

     dispatch ( startLoadingUsers() );

     const {token} = JSON.parse(localStorage.getItem('userData')) 
     
     const users = userApi()

     const {data} =await users.get()

     dispatch( setUsers({
        users:data,
        }) )
  }
}
export const loginUser = (payload) => {
  
  return async (dispatch) => {
    const login = loginApi()
    
     dispatch ( startLoadingUsers() );
         
    const {data} = await login.post('/',payload)

    localStorage.setItem('userData', JSON.stringify(data))
   
  }
}