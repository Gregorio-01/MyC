import axios from "axios";
//aqui se crea un eddpoin base de las rutas de usuario
export const usersApi = axios.create({
    baseURL: 'http://localhost:3001/user'
})