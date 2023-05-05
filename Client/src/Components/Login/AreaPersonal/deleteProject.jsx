import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, cleanState } from "../../../store/slices/projects/thunks";
import './deleteProject.css'

const DeleteProject = ({projectId, closeModal}) => {

    const dispatch = useDispatch();

    const projectDeleted = useSelector(store => store.projects.deletedProject);

    function deleteNow() {
        dispatch(deleteProject(projectId));
        setChanges(true);
    };

    useEffect(() => {
    }, []);

    return (
        <div className="deleteContainer">
            <h1>Seguro que quieres borrar?</h1>
            <div className="deleteButtonsDiv">
                <button className="deleteButton" onClick={deleteNow}>Si</button>
                <button className="noButton" onClick={closeModal}>No</button>
            </div>
        </div>
    );
};

export default DeleteProject;