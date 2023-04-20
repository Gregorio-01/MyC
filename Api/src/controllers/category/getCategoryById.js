import Category from '../../models/Category.js';

export async function getCategoryById(req, res) {
  const categoryId = req.params.id;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la categoría');
  }
}