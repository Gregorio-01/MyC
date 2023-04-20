import { Router } from 'express';
import { loginUser } from '../controllers/login/loginUser.js';




const login = Router();

login.post('/',loginUser)

export default login 