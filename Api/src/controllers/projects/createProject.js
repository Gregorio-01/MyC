import Project from '../../models/Projects.js';
import { CL_API_KEY, CL_API_SECRET, CL_CLOUD_NAME } from '../../../config.js';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: CL_CLOUD_NAME,
  api_key: CL_API_KEY,
  api_secret: CL_API_SECRET,
});

export async function createProject(req, res) {
  const { name, description, categories } = req.body;
  const createdBy = req.usuario._id;
  const file = req.files.image;
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "ProjectPhotos"
    });
    const img = result.secure_url;
    const newProject = new Project({ name, img, description, categories, createdBy });
    const savedProject = await newProject.save();
    console.log(savedProject);
    res.status(201).send('Proyecto creado!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el proyecto');
  }
}