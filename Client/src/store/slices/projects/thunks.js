import { projectApi } from "../../../API/usersAPI";
import { setProjects, setCreatedProject, setDeletedProject, setEditedProject, setClean } from "./projectsSlice";

export const getProjects = () => {
    return async (dispatch) => {
        const allProjects = projectApi();
        const response = await allProjects.get('/');
        const projects = response.data;
        dispatch(setProjects(projects));
    };
};

export const createProject = (project) => {
    return async (dispatch) => {
      const projectUpload = projectApi();
      const response = await projectUpload.post('/', project);
      const newProject = response.data;
      dispatch(setCreatedProject(newProject));
    };
  };

export const deleteProject = (projectId) => {
  return async (dispatch) => {
    const projectDelete = projectApi();
    const response = await projectDelete.delete(`/${projectId}`);
    const message = response.data.message;
    dispatch(setDeletedProject(message));
  };
};

export const editProject = (project, projectId) => {
  return async (dispatch) => {
    const projectUpdate = projectApi();
    const response = await projectUpdate.put(`/${projectId}`, project);
    // console.log(response.data);
    const message = response.data.message;
    dispatch(setEditedProject(message));
  };
};

export const cleanState = (name) => {
  return async (dispatch) => {
    dispatch(setClean(name));
  };
};