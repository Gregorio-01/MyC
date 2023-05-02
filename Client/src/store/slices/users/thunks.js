import axios, { Axios } from "axios";
import  {userApi, loginApi, projectApi, createUserApi} from "../../../API/usersAPI";
import { setUserProjects, setUsers, setActualUser, setUpdatedUser, startLoadingUsers } from "./userSlice";

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
    console.log(login)
     dispatch ( startLoadingUsers() );
         
    const {data} = await login.post('/',payload)

    localStorage.setItem('userData', JSON.stringify(data))
   
  }
};

export const putUser = (updates) => {
  return async (dispatch) => {
    console.log(updates);
    const updateUser = userApi();
    const updatedUser = await updateUser.put(`/token`, updates);
    const response = updatedUser.data;
    console.log(response);
    dispatch(setUpdatedUser(response));
  }
};

export const getThisUser = () => {
  return async (dispatch) => {
    const userByToken = userApi();
    const thisUser = await userByToken.get(`/token`);
    // console.log(thisUser.data);
    dispatch(setActualUser(thisUser.data));
  }
};

export const getUserProjects = () => {
  return async (dispatch) => {
    const allProjects = projectApi();
    const allUserProjects = await allProjects.get('/token');
    dispatch(setUserProjects(allUserProjects.data));
  }
};

export const createUser = (user) => {
    
  return async (dispatch) => {
    
    try{
    const api = userApi()

    const newUser = await api.post('/',user);

    return newUser }
    
    catch(err){
      err=> err
    }
   
  }
};