import mongoose, { Schema } from 'mongoose';

export const CategoryEnum = ['Comercial', 'Grupo Familiar Pequeño', 'MC', 'Multifamiliar', 'My Construction', 'Unifamiliar', 'Verano', 'Viviendas'];

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const CategoryModel = mongoose.model('Category', categorySchema);

export default CategoryModel;

