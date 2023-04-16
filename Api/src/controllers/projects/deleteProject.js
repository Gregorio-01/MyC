import ProjectModel from '../../models/Projects.js';

export async function deleteProject(req, res) {
  const projectId = req.params.id;
  try {
    // Buscamos el proyecto por su ID y lo eliminamos
    const deletedProject = await ProjectModel.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    return res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar proyecto' });
  }
}



