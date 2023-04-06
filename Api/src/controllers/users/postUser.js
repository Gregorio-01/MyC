import User from '../../models/Users.js';

export async function postUser(req, res) {
  try {
    const { name, lastname, email, password } = req.body;
    const newUser = new User({ name, lastname, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
}