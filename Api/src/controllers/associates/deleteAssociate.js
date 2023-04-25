import User from '../../models/Associates.js';

export async function deleteAssociate(req, res) {
  const associateId = req.params.id;
  try {
    // Buscamos el usuario por su ID y lo eliminamos
    const deletedAssociate = await User.findByIdAndDelete(associateId);
    if (!deletedAssociate) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }
    return res.json({ message: 'Empresa eliminada correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar empresa' });
  }
}