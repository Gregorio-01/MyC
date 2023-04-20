import mongoose from 'mongoose';

const associateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  photo: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  product1: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  product2: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  product3: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  destacada: {
    type: Boolean,
    default:false
  }
});

const Associate = mongoose.model('Associate', associateSchema);

export default Associate;