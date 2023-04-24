import mongoose from 'mongoose';

const materialsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  ranking: {
    type: String, 
    enum: ['destacado', 'no-destacado'],
    default: 'no-destacado'
  }
});

const MaterialsModel = mongoose.model('Materials', materialsSchema);

export default MaterialsModel;