import MaterialsModel from "../../models/Materials.js";


export async function updateMaterial(req, res) {
  const materialId = req.params.id;
  const { name, type, description, link, img, ranking } = req.body;

  try {
    const updatedMaterial = await MaterialsModel.findByIdAndUpdate(
        materialId,
      { name, type, description, link, img, ranking},
      { new: true }
    )
    if (!updatedMaterial) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    res.json(updatedMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el material');
  }
}