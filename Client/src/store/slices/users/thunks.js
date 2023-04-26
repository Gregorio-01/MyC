import axios, { Axios } from "axios";
import  {userApi, loginApi, projectApi} from "../../../API/usersAPI";
import { setProjects, setUsers, setActualUser, setUpdatedUser, startLoadingUsers } from "./userSlice";

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
    console.log(thisUser);
    dispatch(setActualUser(thisUser.data));
  }
};

export const getUserProjects = (id) => {
  return async (dispatch) => {
    const allUserProjects = await projectApi.get('/', id);
    dispatch(setProjects(allUserProjects.data));
  }
};

export const createProject = (project) => {
  return async () => {
    const response = await projectApi.post('/', project);
    const newProject = response.data;
  }
};