import User from '../../models/Users.js';
import { CL_API_KEY, CL_API_SECRET, CL_CLOUD_NAME } from '../../../config.js';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: CL_CLOUD_NAME,
  api_key: CL_API_KEY,
  api_secret: CL_API_SECRET,
});

export async function putUser(req, res) {
  const userId = req.params.id;
  const updates = req.body;
  const file = req.body.files ? req.body.files.image : null;
  try {
    if (file) {
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "FotoPerfil"
      });
      const imageUrl = result.secure_url;
      updates.img = imageUrl;
    }
    // Buscamos el usuario por su ID y lo actualizamos
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.send('Usuario modificado');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al actualizar usuario' });
  }
}