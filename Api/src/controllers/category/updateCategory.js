import Category from '../../models/Category.js';

export async function updateCategory(req, res) {
  const categoryId = req.params.id;
  const { name } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, { name }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la categoría');
  }
}