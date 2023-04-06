import User from '../../models/Users.js';

export async function getOneUser(req, res) {
  const userId = req.params.id;
  try {
    // Buscamos el usuario por su ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener usuario' });
  }
}