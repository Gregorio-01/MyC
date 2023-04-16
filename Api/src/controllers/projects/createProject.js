import Project from '../../models/Projects.js';

export async function createProject(req, res) {
  const { name, img, description, categories } = req.body;

  try {
    const newProject = new Project({ name, img, description, categories });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el proyecto');
  }
}