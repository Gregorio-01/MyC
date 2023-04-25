import MaterialsModel from "../../models/Materials.js";

export async function getMaterialById(req, res) {
  const materialId = req.params.id;

  try {
    const material = await MaterialsModel.findById(materialId)
    if (!material) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    res.json(material);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el material');
  }
}