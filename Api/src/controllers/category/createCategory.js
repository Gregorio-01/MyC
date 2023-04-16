import Category from '../../models/Category.js';

export async function createCategory(req, res) {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la categoría');
  }
}