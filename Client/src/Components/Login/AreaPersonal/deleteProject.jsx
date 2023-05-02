import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../../store/slices/projects/thunks";
import './deleteProject.css'

const DeleteProject = ({projectId, closeModal}) => {

    const dispatch = useDispatch();

    const projectDeleted = useSelector(store => store.projects.deletedProject);

    function deleteNow() {
        dispatch(deleteProject(projectId));
    };

    return (
        <div className="deleteContainer">
            <h1>Seguro que quieres borrar?</h1>
            <div className="deleteButtonsDiv">
                <button className="deleteButton" onClick={deleteNow}>Si</button>
                <button className="noButton" onClick={closeModal}>No</button>
            </div>
            {
                projectDeleted && <div>
                    <h1>{projectDeleted}</h1>
                </div>
            }
        </div>
    );
};

export default DeleteProject;