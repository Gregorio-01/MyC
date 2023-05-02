import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../../store/slices/projects/thunks";
import { getCategories } from "../../../store/slices/categories/thunks";

const EditProject = ({projectId}) => {

    const dispatch = useDispatch();

    const categories = useSelector(store => store.categories.categories);
    const editedProject = useSelector(store => store.projects.editedProject);

    const [project, setProject] = useState({
        name: '',
        img: {},
        description: '',
        categories: '',
    });
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === 'img') {
            setProject({
                ...project,
                img: e.target.files[0]
            });
        }
        if (e.target.name !== 'img') {
            setProject({
                ...project,
                [e.target.name]: e.target.value,
            });
        };
    };

    function uploadProject() {
        const formData = new FormData();
        formData.append('image', project.img);
        formData.append('name', project.name);
        formData.append('description', project.description);
        formData.append('categories', project.categories);
        dispatch(editProject(formData, projectId));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    
    return (
        <div className="editProjectContainer">
            <div>
                <input className="input" name="name" value={project.name} onChange={(e) => handleChange(e)} placeholder="Nombre del proyecto"/>
            </div>
            <div className="inputContainer">
                <input className="input" type="file" name='img' onChange={(e) => handleChange(e)} placeholder="Elegir archivo"/>
            </div>
            <div>
                <input className="input" name="description" onChange={(e) => handleChange(e)} placeholder="Descripción"/>
            </div>
            <div>
                <select className="input" name='categories' onChange={(e) => handleChange(e)}>
                    <option selected={true} disabled='disabled'>Categorías</option>
                    {
                        categories && categories.map(categorie => {
                            return (
                                <option value={categorie._id}>{categorie.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={uploadProject}>Guardar cambios</button>
            </div>
            {
                editedProject && <span>Cambios guardados!</span>
            }
        </div>
    )
};

export default EditProject;