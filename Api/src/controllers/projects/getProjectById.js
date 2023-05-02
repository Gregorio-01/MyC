import Project from '../../models/Projects.js';

export async function getProjectById(req, res) {
  const projectId = req.params.id;
  const userId = req.usuario._id;

  try {
    if(projectId) {
      const project = await Project.findById(projectId).populate('categories');
      if (!project) {
        return res.status(404).json({ message: 'Proyecto no encontrado' });
      }
    }
    const project = await Project.find({createdBy: userId}).populate('categories');
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el proyecto');
  }
}