import { Router } from 'express';
import { getAllUsers } from '../controllers/users/getAllUsers.js';
import { getUserByEmail } from '../controllers/users/getUserByEmail.js';
import { getOneUser } from '../controllers/users/getOneUser.js';
import { postUser } from '../controllers/users/postUser.js';
import { deleteUser } from '../controllers/users/deleteUser.js';
import { putUser } from '../controllers/users/putUser.js';
import { validateJWT } from '../middlewares/validateJWT.js';

const user = Router();

user.get('/', validateJWT,getAllUsers);
user.get('/email/:email', getUserByEmail);
user.get('/:id', getOneUser);
user.post('/', postUser);
user.delete('/:id', deleteUser);
user.put('/:id',putUser);

export default user;