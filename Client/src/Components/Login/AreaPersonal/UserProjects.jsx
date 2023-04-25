import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getUserProjects } from "../../../store/slices/users/thunks";
import './userProjects.css';

const UserProjects = () => {

    const userData = JSON.parse(window.localStorage.getItem('userData'));
    // const userId = userData.id;

    const dispatch = useDispatch();
    const projects = useSelector(store => store.users.projects);
    // const projects = null;

    const defaultPic = 'https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png';

    useEffect(() => {
        dispatch(getUserProjects(45));
    }, []);

    return (
        <div className="mainContainer">
            {
                projects[0] ? 
                // (<div>
                //     <div className="container">
                //         <div className="imageContainer">
                //             <img className="projectImage" src={projects[0].img[0]}/>
                //         </div>
                //         <div className="textContainer">
                //             <div className="titleContainer">
                //                 <h1 className="title">{projects[0].name}</h1>
                //             </div>
                //             <div className="descriptionContainer">
                //                 <h6 className="description">{projects[0].description}</h6>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                (projects.map(project => { return (
                    <div className="container">
                        <div className="imageContainer">
                            <img className="projectImage" src={project.img[0] || defaultPic} alt='Project pic!'/>
                        </div>
                        <div className="textContainer">
                            <div className="titleContainer">
                                <h1 className="title">{project.name}</h1>
                            </div>
                            <div className="descriptionContainer">
                                <h6 className="description">{project.description}</h6>
                            </div>
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