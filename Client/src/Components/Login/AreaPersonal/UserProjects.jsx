import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getUserProjects } from "../../../store/slices/users/thunks";
import './userProjects.css';
import useModal from "../../../hooks/useModal/useModal";
import DeleteProject from "./deleteProject";
import EditProject from "./editProject";

const UserProjects = () => {

    const dispatch = useDispatch();
    const projects = useSelector(store => store.users.userProjects);

    const defaultPic = 'https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png';

    const [ModalComponent, openModal, closeModal] = useModal();
    const [ModalComponent2, openModal2, closeModal2] = useModal();

    useEffect(() => {
        dispatch(getUserProjects());
    }, []);

    return (
        <div className="mainContainer">
            {
                projects[0] ? (projects.map(project => { return (
                    <div className="container">
                        <div className="imageContainer">
                            <img className="projectImage" src={project.img[0] || defaultPic} alt='Project pic!'/>
                        </div>
                        <div className="textContainer">
                            <div className="titleContainer">
                                <h1 className="projectTitle">{project.name}</h1>
                            </div>
                            <div className="descriptionContainer">
                                <h6 className="description">{project.description}</h6>
                            </div>
                        </div>
                        <div className="optionsContainer">
                            <div className="deleteContainer">
                                <button onClick={openModal} className="deleteProject">X</button>
                            </div>
                            <ModalComponent>
                                <DeleteProject projectId={project._id} />
                            </ModalComponent>
                            <div className="editContainer">
                                <button onClick={openModal2} className="editProject">🖊</button>
                            </div>
                            <ModalComponent2>
                                <EditProject projectId={project._id} />
                            </ModalComponent2>
                        </div>
                    </div>
                )})
                ) : <div className="noProjectsDiv">
                        <h1>No tenes proyectos!</h1>
                    </div>
            }
        </div>
    )
};

export default UserProjects;