import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/LOGO.png"
import "./navBar.css"
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const [show, setShow] = useState(true);

  const handleLinkClick = (link) => {
    if (activeLink === link) {
      setActiveLink(null);
    } else {
      setActiveLink(link);
    }
  };

  useEffect(() => {
    location.pathname === '/login/AreaPersonal' ? setShow(false) : setShow(true) || location.pathname === '/login/desarrollo' ? setShow(false) : setShow(true)
    // console.log(location);
    // console.log(show);
  }, [location]);

  return (
    <div className={show ? 'navBar-container' : 'dblock'}> 
      <div>
        <img className ="navBar-img" src={logo} alt="logoMyConstrution" />
      </div>
      <ul className="container-li">
        <li className={activeLink === null ? 'active' : ''}>
          <NavLink exact to='/' onClick={() => handleLinkClick(null)}>
            Inicio
          </NavLink>
        </li>
        <li className={activeLink === 'quienes-somos' ? 'active' : ''}>
          <NavLink to='/about' onClick={() => handleLinkClick('quienes-somos')}>
            ¿Quiénes somos?
          </NavLink>
        </li>
        <li className={activeLink === 'proyectos' ? 'active' : ''}>
          <NavLink to='/projects' onClick={() => handleLinkClick('proyectos')}>
            Proyectos
          </NavLink>
        </li>
        <li className={activeLink === 'noticias' ? 'active' : ''}>
          <NavLink to='/news' onClick={() => handleLinkClick('noticias')}>
            Noticias
          </NavLink>
        </li>
        <li className={activeLink === 'contacto' ? 'active' : ''}>
          <NavLink to='/contact' onClick={() => handleLinkClick('contacto')}>
            Contacto
          </NavLink>
        </li>
        <li className={activeLink === 'ingresar' ? 'active' : ''}>
          <NavLink to='/login' onClick={() => handleLinkClick('ingresar')}>
            Ingresar
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
