import axios from "axios";
//aqui se crea un eddpoin base de las rutas de usuario

export const loginApi = () => {
    const loginInterfase = axios.create({
<<<<<<< HEAD
      baseURL: 'http://localhost:3001/login'
    });
    return loginInterfase;
  }
=======
        baseURL: 'http://localhost:3001/login'
    });
    return loginInterfase;
}
>>>>>>> e859354fb58b7fdf9293765b4c33ceb44350190f
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

