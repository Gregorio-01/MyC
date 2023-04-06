import User from '../../models/Users.js';

export async function putUser(req, res) {
  const userId = req.params.id;
  const updates = req.body;
  try {
    // Buscamos el usuario por su ID y lo actualizamos
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar usuario' });
  }
}