import mongoose from 'mongoose';

const associateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,

  },
  photo: {
    type: String,
    required: true,

  },
  product1: {
    type: String,
    required: true,

  },
  product2: {
    type: String,
    required: true,

  },
  product3: {
    type: String,
    required: true,

  },
  destacada: {
    type: Boolean,
    default: false
  }
});

const Associate = mongoose.model('Associate', associateSchema);

export default Associate;