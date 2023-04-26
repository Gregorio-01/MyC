import axios from "axios";
//aqui se crea un eddpoin base de las rutas de usuario

export const loginApi = () => {
    const loginInterfase = axios.create({
      baseURL: 'http://localhost:3001/login'
    });
    return loginInterfase;
  }
export const projectApi = axios.create({
    baseURL:'http://localhost:3001/project'
    
});

export const userApi = () => {
    const {token} = JSON.parse(localStorage.getItem('userData')) 
    
    const headers = {
        'token': token,
        };
    // axios instance
    let userInstace = axios.create({
        baseURL: 'http://localhost:3001/user',
        headers
    })
    return userInstace;
}

