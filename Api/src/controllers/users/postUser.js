import User from '../../models/Users.js';
import bcrypt from 'bcryptjs';

export async function postUser(req, res) {

  
  try {
    let { name, lastname, email, password } = req.body;

    //encriptar la contraseña
    const salt = bcrypt.genSaltSync(10)
    password = bcrypt.hashSync(password.toString(), salt)
    
    //crear el nuevo usuario
    const newUser = new User({ name, lastname, email, password });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
}