import { Router } from 'express';
import { getAllProjects} from '../controllers/projects/getAllProjects.js';
import { getProjectById } from '../controllers/projects/getProjectById.js';
import { createProject } from '../controllers/projects/createProject.js';
import { deleteProject } from '../controllers/projects/deleteProject.js';
import { updateProject } from '../controllers/projects/updateProject.js';


const project = Router();

project.get('/', getAllProjects);
project.get('/:id', getProjectById);
project.post('/', createProject);
project.delete('/:id', deleteProject);
project.put('/:id', updateProject);


export default project;