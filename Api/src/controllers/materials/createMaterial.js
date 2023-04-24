import MaterialsModel from "../../models/Materials.js";

export async function createMaterial(req, res) {
  const { name, type, description, link, img, ranking } = req.body;

  try {
    const newMaterial = new MaterialsModel({ name, type, description, link, img, ranking });
    const savedMaterial = await newMaterial.save();
    
    res.status(201).json(savedMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el material');
  }
}