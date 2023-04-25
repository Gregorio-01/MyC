import User from '../../models/Associates.js';

export async function putAssociate(req, res) {
  const associateId = req.params.id;
  const updates = req.body;
  try {
    // Buscamos el usuario por su ID y lo actualizamos
    const updatedAssociate = await User.findByIdAndUpdate(associateId, updates, { new: true });
    if (!updatedAssociate) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }
    return res.json(updatedAssociate);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar empresa' });
  }
}