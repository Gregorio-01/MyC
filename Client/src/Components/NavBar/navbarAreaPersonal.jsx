import { Link } from "react-router-dom";

const NavbarAreaPersonal = () => {

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
                        <a className='navbar__img abierto' id='btnNavNormal'>
                            <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/menu_inpu5v.png" alt="menu"/>
                        </a>
                    </div>
                </div>
                <div className="contenedor__Responsive" id="contenedor"> </div>
                <div className="containerNormal" id="containerNormal"> </div>
                <div className="header__user">
                    <div id="datosContainer" className="header__datos">
                        <div className="profilePic" ></div>
                        <h1>USUARIO X</h1>
                    </div>
                    <div className="header__msjBtn">
                        <button id="btnMensajes"> <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1680739240/Pagina%20Interna/mensaje_dnkfbc.png" alt="" /> </button>
                        <div id="containerMsj"></div>
                    </div>
                </div>
            </header>
    )
};

export default NavbarAreaPersonal;

