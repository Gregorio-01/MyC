import React, { useEffect, useState } from "react";
import './areaPersonal.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import useModal from '../../../hooks/useModal/useModal';
import ModifyInfo from "./modifyInfo";
import ModifyImage from "./modifyImage";
import UploadProject from "./uploadProject";
import UserProjects from "./UserProjects";
import { getThisUser, getUserProjects } from "../../../store/slices/users/thunks";
import DeleteProject from "./deleteProject";
import EditProject from "./editProject";

export default function AreaPersonal () {

    const dispatch = useDispatch();
    const [ModalComponent, openModal, closeModal] = useModal();
    const [ModalComponent2, openModal2, closeModal2] = useModal();
    const [ModalComponent3, openModal3, closeModal3] = useModal();
    const [ModalComponent4, openModal4, closeModal4] = useModal();
    const [ModalComponent5, openModal5, closeModal5] = useModal();

    const projects = useSelector(store => store.users.userProjects);
    const previewProjects = [];
    for (let i=0; i<projects.length; i++) {
        previewProjects.push(projects[i])
    };
    const createdProject = useSelector(store => store.projects.createProject);
    const deletedProject = useSelector(store => store.projects.deletedProject);
    const updatedProject = useSelector(store => store.projects.updatedProject);

    const [showDd, setShowDd] = useState(false);

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const user = useSelector((store) => store.users.actualUser);
    const userImage = user.img;
    const updatedUser = useSelector((store) => store.users.updatedUser);

    useEffect(() => {
        dispatch(getThisUser());
        dispatch(getUserProjects());
    }, [updatedUser, createdProject, deletedProject, updatedProject]);

    return (
        <div>
            <header className="header">
                <div className="header__container">
                    <div className="header__img">
                        <a href="internos.html"><img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png" alt=""/></a>
                    </div>
                    <div id="navbar" className="abierto header__enlaces navbar">
                        <Link to="/login">
                            <a href="">Inicio</a>
                        </Link>
                        <Link to="/contact">
                            <a href="">Contacto</a>
                        </Link>
                        <a onClick={() => setShowDd((prev) => !prev)} className='navbar__img'>
                            <img src='https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/menu_inpu5v.png' alt="menu"/>
                        </a>
                        {
                            showDd && (
                            <div className="Dropdown">
                                <Link to='/login/areaPersonal'>
                                    <h4>Área Personal</h4>
                                </Link>
                                <Link to='/'>
                                    <h4>Empresas Asociadas</h4>
                                </Link>
                                <Link to='/'>
                                    <h4>Herramientas</h4>
                                </Link>
                                <Link to='/'>
                                    <h4>Términos y Condiciones</h4>
                                </Link>
                                <Link to='/'>
                                    <h4>Cerrar Sesión</h4>
                                </Link>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="contenedor__Responsive" id="contenedor"> </div>
                <div className="containerNormal" id="containerNormal"> </div>
                <div className="header__user">
                    <div id="datosContainer" className="header__datos">
                        <div className="profilePic">
                            <img className="profilePic" src={userImage || 'https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png'} alt=''/>
                            <div>
                                <button className="modifyImage" onClick={openModal2}>Cambiar imagen</button>
                            </div>
                            <ModalComponent2>
                                <ModifyImage />
                            </ModalComponent2>
                        </div>
                        <div className="headerDatosText">
                            <h1>{user.name || 'Usuario X'}</h1>
                            <div>
                            <button className="modifyInfo" onClick={openModal}>Modificar información</button>
                            </div>
                        </div>
                        <ModalComponent>
                            <ModifyInfo />
                        </ModalComponent>
                    </div>
                    <div className="header__msjBtn">
                        <button id="btnMensajes">
                            <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/mensaje_dnkfbc.png" alt="msg" />
                        </button>
                        <div id="containerMsj"></div>
                    </div>
                </div>
            </header>
            <main>
                <section className="main">
                    <div className="main__container">
                        <div className="proyectos__container">
                            <div>
                                <h2>Mis ultimos proyectos</h2>
                            </div>
                            {
                                previewProjects.length ? (previewProjects.map(project => { return (
                                    <div className="container">
                                        <div className="imageContainer">
                                            <img className="projectImage" src={project.img[0]}/>
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
                                                <button onClick={openModal4} className="deleteProject">🗑</button>
                                            </div>
                                            <ModalComponent4>
                                                <DeleteProject projectId={project._id}/>
                                            </ModalComponent4>
                                            <div className="editContainer">
                                                <button onClick={openModal5} className="editProject">🖊</button>
                                            </div>
                                            <ModalComponent5>
                                                <EditProject projectId={project._id}/>
                                            </ModalComponent5>
                                        </div>
                                    </div>
                                )})) : <div className="noProjectsDiv">
                                        <h1>No tenes proyectos!</h1>
                                    </div>
                            }
                            <div className="proyectos__button">
                                <Link to='/login/areaPersonal/proyectos'>
                                    <button id="btnVer" className="seeAll">Ver todos</button>
                                </Link>
                                <button id="btnUpload" className='upload' onClick={openModal3}>Subir nuevo proyecto</button>
                                <ModalComponent3>
                                    <UploadProject />
                                </ModalComponent3>
                                <div id="backgroundTodos">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="cardStats" className="card">
                                <div className="item item--3">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg>
                                    <span className="quantity">{projects.length}</span>
                                    <span className="published">Publicados</span>
                                    </div>
                                <div className="item item--1">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(149,149,255,1)" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                                    <span className="quantity">{user.sales || '0'}</span>
                                    <span className="sold">Vendidos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};