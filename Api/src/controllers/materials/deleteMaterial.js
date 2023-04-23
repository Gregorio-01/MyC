import MaterialsModel from "../../models/Materials.js";

export async function deleteMaterial(req, res) {
  const materialId = req.params.id;
  try {
    // Buscamos el proyecto por su ID y lo eliminamos
    const deletedMaterial = await MaterialsModel.findByIdAndDelete(materialId);
    if (!deletedMaterial) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    return res.json({ message: 'Material eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar material' });
  }
}



