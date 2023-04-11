import axios from "axios";

export const usersApi = axios.create({
    baseURL: 'http://localhost:3001/user'
})