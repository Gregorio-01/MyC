import { Router } from 'express';
import { getAllCategories } from '../controllers/category/getAllCategories.js';
import { getCategoryById } from '../controllers/category/getCategoryById.js';
import { createCategory } from '../controllers/category/createCategory.js';
import { updateCategory } from '../controllers/category/updateCategory.js';
import { deleteCategory } from '../controllers/category/deleteCategory.js';
import { createAllCategories } from '../controllers/category/createAllCategories.js';

const categoryRoutes = Router();

categoryRoutes.get('/', getAllCategories);
categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.post('/', createCategory);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', deleteCategory);
categoryRoutes.post('/create-all', createAllCategories);

export default categoryRoutes;