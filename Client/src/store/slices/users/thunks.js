import axios, { Axios } from "axios";
import userApi, { loginApi} from "../../../API/usersAPI";
import { setUsers } from "./userSlice";
import { startLoadingUsers } from "./userSlice";
import { setActualUser } from './userSlice';

//esta son las llamadas asicronicas que utilizan las acciones comunes una vez que se resuelven
export const getUsers = () => {
  return async (dispatch) => {

     dispatch ( startLoadingUsers() );

     const {token} = JSON.parse(localStorage.getItem('userData')) 

    const instance = axios.create({
      baseURL: 'http://localhost:3001/user',
      headers: {'Authorization': token}
    });
    
    const {data} = await instance.get()
    console.log(data)
     /* dispatch( setUsers({
        users:data,
        }) ) */
  }
}

export const loginUser = (payload) => {
  return async (dispatch) => {
     dispatch ( startLoadingUsers() );
         console.log(payload,'estamos en login user')
    const loginMyUser = await axios.post('http://localhost:3001/login',payload)
    .then( res => localStorage.setItem('userData', JSON.stringify(res.data)))
   
     /* dispatch( setUsers({
        users:data,
        }) ) */
  }
};

export const putUser = (updates) => {
  return async (dispatch) => {
    console.log(updates);
    const updatedUser = await usersApi.put('/:id', updates);
    dispatch( setActualUser(updatedUser.data));
  }
};