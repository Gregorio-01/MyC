import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './uploadProject.css';
import { createProject } from "../../../store/slices/users/thunks";

const UploadProject = () => {

    const dispatch = useDispatch();
    
    const userData = JSON.parse(window.localStorage.getItem('userData'));

    const [project, setProject] = useState({
        name: '',
        img: {},
        description: '',
        categories: '',
    });
    function handleChange(e) {
        e.preventDefault();
        setProject({
            ...project,
            [e.target.name]: [e.target.value],
        })
    };
    function handleFileChange(e) {
        e.preventDefault();
        setProject({
            ...project,
            img: e.target.files[0],
        })
    };
    function uploadProject() {
        // dispatch(createProject(project));
    };

    return (
        <div className="uploadProjectContainer">
            <div>
                <input className="input" name="name" value={project.name} onChange={(e) => handleChange(e)} placeholder="Nombre del proyecto"/>
            </div>
            <div className="inputContainer">
                <input className="input" type="file" onChange={handleFileChange} placeholder="Elegir archivo"/>
            </div>
            <div>
                <input className="input" name="description" onChange={(e) => handleChange(e)} placeholder="Descripción"/>
            </div>
            <div>
                <select className="input" name='categories' onChange={(e) => handleChange(e)}>
                    <option selected={true} disabled='disabled'>Categorías</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={uploadProject}>Subir proyecto</button>
            </div>
        </div>
    )
};

export default UploadProject;