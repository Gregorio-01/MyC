import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./navBarHook.css"

export const NavBarHook = () => {

    const [showDd, setShowDd] = useState(false);


  return (
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
    </header>
  )
}
