import ProjectModel from '../../models/Projects.js';

export const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find().populate('categories', 'name');
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los proyectos');
  }
};