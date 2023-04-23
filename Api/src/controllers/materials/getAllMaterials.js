import MaterialsModel from "../../models/Materials.js";

export const getAllMaterials = async (req, res) => {
  try {
    const models = await MaterialsModel.find();
    res.json(models);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los materials');
  }
};