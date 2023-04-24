import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './uploadProject.css';

const UploadProject = () => {

    const dispatch = useDispatch();
    
    const userData = JSON.parse(window.localStorage.getItem('userData'));

    const [project, setProject] = useState({
        name: '',
        file: {},
    });
    function handleNameChange(e) {
        e.preventDefault();
        setProject({
            ...project,
            name: e.target.value,
        })
    };
    function handleFileChange(e) {
        e.preventDefault();
        setProject({
            ...project,
            file: e.target.files[0],
        })
    };
    function uploadProject() {
        dispatch();
    };

    return (
        <div className="uploadProjectContainer">
            <div>
                <input className="input" value={project.name} onChange={(e) => handleNameChange(e)} placeholder="Nombre del proyecto"/>
            </div>
            <div className="inputContainer">
                <input className="input" type="file" placeholder="Elegir archivo"/>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={uploadProject}>Subir proyecto</button>
            </div>
        </div>
    )
};

export default UploadProject;