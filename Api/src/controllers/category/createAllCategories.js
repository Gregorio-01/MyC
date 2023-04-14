import Category, { CategoryEnum } from '../../models/Category.js';

export async function createAllCategories(req, res) {
  try {
    const categories = CategoryEnum; // Accede al array CategoryEnum
    const createdCategories = await Category.insertMany(categories.map(name => ({ name }))); // Crea las categorías
    res.json(createdCategories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear las categorías');
  }
}