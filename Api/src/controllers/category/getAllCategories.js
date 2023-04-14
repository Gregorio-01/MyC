import Category from '../../models/Category.js';

export async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las categorías');
  }
}