import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  img: {
    type: String,
    default: "https://myconstruction.com.ar/wp-content/uploads/2019/02/LOGO-512.png",
  },
  sales: {
    type: Number,
    required: true,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

export default User;