import User from '../../models/Users.js';

export async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    // Buscamos el usuario por su ID y lo eliminamos
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar usuario' });
  }
}