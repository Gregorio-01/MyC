import axios from "axios";
//aqui se crea un eddpoin base de las rutas de usuario

export const loginApi = () => {

    const loginInterfase = axios.create({
      baseURL: 'http://localhost:3001/login'
    });
    return loginInterfase;
};

export const projectApi = () => {

    const {token} = JSON.parse(localStorage.getItem('userData'));
    const headers = {
        'token': token,
    };
    let projecInterfase = axios.create({
        baseURL:'http://localhost:3001/project',
        headers
    });
    return projecInterfase;
};

export const userApi = () => {

    const {token} = JSON.parse(localStorage.getItem('userData'));
    const headers = {
        'token': token,
    };
    let userInstace = axios.create({
        baseURL: 'http://localhost:3001/user',
        headers
    })
    return userInstace;
};

export const createUserApi = () => {
    const createUser = axios.create({
      baseURL: 'http://localhost:3001/login'
    });
    return createUser;
  }

export const categoriesApi = () => {

    let categoriesInstance = axios.create({
        baseURL: 'http://localhost:3001/category',
    });
    return categoriesInstance;
};