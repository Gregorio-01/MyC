import Project from '../../models/Projects.js';

export async function updateProject(req, res) {
  const projectId = req.params.id;
  const { name, img, description, categories } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { name, img, description, categories },
      { new: true }
    ).populate('categories');
    if (!updatedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el proyecto');
  }
}