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

export default function AreaPersonal () {

    const userData = JSON.parse(window.localStorage.getItem('userData'));
    console.log(userData);

    const dispatch = useDispatch();
    const [ModalComponent, openModal, closeModal] = useModal();
    const [ModalComponent2, openModal2, closeModal2] = useModal();
    const [ModalComponent3, openModal3, claseModal3] = useModal();
    // const [ModalComponent4, openModal4, claseModal4] = useModal();

    const projects = useSelector(store => store.users.projects);
    const previewProjects = [projects[0], projects[1]];
    console.log(previewProjects)

    const [showDd, setShowDd] = useState(false);

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const user = useSelector((store) => store.users.actualUser);
    console.log(user);
    // const imageUrl = useSelector((store) => store.users.actualUser.img);

    useEffect(() => {
        dispatch(getThisUser());
        dispatch(getUserProjects(45));
        console.log('Desapachó');
    }, []);

    // useEffect(() => {
    //     // setLoading(false);
    //     console.log(user);
    //     dispatch(getUserProjects(45));
    // }, []);

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
                            <img className="profilePic" src={user.img ? user.img : 'https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/logoSinFondo_lbttlj.png'} alt=''/>
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
                                previewProjects[0]? (previewProjects.map(project => { return (
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
                                                <button className="deleteProject">X</button>
                                            </div>
                                            <div className="editContainer">
                                                <button className="editProject">🖊</button>
                                            </div>
                                        </div>
                                    </div>
                                )})) : <div className="noProjectsDiv">
                                        <h1>No tenes proyectos!</h1>
                                    </div>
                            }
                            {/* <UserProjects projects={[projects[0], projects[1]]}/> */}
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
                                    {/* <div className="item item--2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0L24 0 24 24 0 24z"></path><path d="M16 16c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 14c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm8.5-12C17.538 2 20 4.462 20 7.5S17.538 13 14.5 13 9 10.538 9 7.5 11.462 2 14.5 2zm0 2C12.567 4 11 5.567 11 7.5s1.567 3.5 3.5 3.5S18 9.433 18 7.5 16.433 4 14.5 4z" fill="rgba(252,161,71,1)"></path></svg>    <span class="quantity"> 70+ </span>
                                    <span className="text text--2"> Illustrations </span>
                                    </div> */}
                                    <div className="item item--3">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(66,193,110,1)" d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg>
                                    <span className="quantity">{user.projects || '10'}</span>
                                    <span className="published">Publicados</span>
                                    </div>
                                    <div className="item item--1">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(149,149,255,1)" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
                                    <span className="quantity">{user.sales || '0'}</span>
                                    <span className="sold">Vendidos</span>
                                    </div>
                                    {/* <div className="item item--4">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(220,91,183,1)" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                    <span className="quantity"> 30+ </span>
                                    <span className="text text--4"> Animations </span>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};