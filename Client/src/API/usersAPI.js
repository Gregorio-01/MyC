import axios from "axios";
//aqui se crea un eddpoin base de las rutas de usuario

export const loginApi = axios.create({
    baseURL: 'http://localhost:3001/login'
});

export const projectApi = axios.create({
    baseURL:'http://localhost:3001/project'
});

const userApi = () => {
    
    // axios instance
    let userInstace = axios.create({
        baseURL: 'http://localhost:3001/user',
    })

    // Set auth token for any request
    userInstace.interceptors.request.use(function (config) {
        
        const {token} = JSON.parse(localStorage.getItem('userData')) 
        
        config.headers.Authorization = token ? `Bearer ${token}` : "";
        return config;
    });

    return userInstace;
};

export default userApi();