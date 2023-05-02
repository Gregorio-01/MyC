import Project from '../../models/Projects.js';
import { CL_API_KEY, CL_API_SECRET, CL_CLOUD_NAME } from '../../../config.js';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: CL_CLOUD_NAME,
  api_key: CL_API_KEY,
  api_secret: CL_API_SECRET,
});

export async function updateProject(req, res) {
  const projectId = req.params.id;
  const updates = req.body;
  const file = req.files.image;

  try {
    if (file) {
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "ProjectPhotos"
      });
      const imageUrl = result.secure_url;
      updates.img = imageUrl;
    }
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updates,
      { new: true }
    ).populate('categories');
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(201).send('Proyecto modificado!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el proyecto');
  }
}