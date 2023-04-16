import Category from '../../models/Category.js';

export async function deleteCategory(req, res) {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la categoría');
  }
}