import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProject } from "../../../store/slices/projects/thunks";
import { getCategories } from "../../../store/slices/categories/thunks";

const EditProject = ({projectId}) => {

    const dispatch = useDispatch();

    const categories = useSelector(store => store.categories.categories);
    const editedProject = useSelector(store => store.projects.editedProject);
    const [changes, setChanges] = useState(false);

    const formData = new FormData();

    const [project, setProject] = useState({
        name: '',
        image: {},
        description: '',
        categories: '',
    });
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name === 'image') {
            setProject({
                ...project,
                [e.target.name]: e.target.files[0]
            });
        }
        if (e.target.name !== 'image') {
            setProject({
                ...project,
                [e.target.name]: e.target.value,
            });
            formData.append(`${e.target.name}`, e.target.value);
        };
    };

    function uploadProject() {
        for (let key in project) {
            if (project[key]) {
                formData.append(`${key}`, project[key]);
            };
        };
        dispatch(editProject(formData, projectId));
        setChanges(true);
    };

    useEffect(() => {
        dispatch(getCategories());
        setChanges(false);
    }, []);
    
    return (
        <div className="editProjectContainer">
            <div>
                <input className="input" name="name" value={project.name} onChange={(e) => handleChange(e)} placeholder="Nombre del proyecto"/>
            </div>
            <div className="inputContainer">
                <input className="input" type="file" name='image' onChange={(e) => handleChange(e)} placeholder="Elegir archivo"/>
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
                changes && <span>{editedProject}</span>
            }
        </div>
    )
};

export default EditProject;