import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../../store/slices/projects/thunks";

const DeleteProject = ({projectId}) => {

    const dispatch = useDispatch();

    const projectDeleted = useSelector(store => store.projects.deletedProject);

    function deleteNow() {
        dispatch(deleteProject(projectId));
    };

    return (
        <div className="deleteShowDown">
            <h1>Seguro que quieres borrar?</h1>
            <div className="deleteButtonsDiv">
                <button onClick={deleteNow}>Si</button>
                <button >No</button>
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