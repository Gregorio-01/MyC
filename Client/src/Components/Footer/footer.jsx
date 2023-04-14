import "./footer.css"
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {

    const [activeLink, setActiveLink] = useState(null);
  
    const handleLinkClick = (link) => {
      if (activeLink === link) {
        setActiveLink(null);
      } else {
        setActiveLink(link);
      }
    };

  return (
    <footer>
        <div className="parent">
          <div className="div1">
            <img className="navBar-img" src={'https://myconstruction.com.ar/wp-content/uploads/2019/02/Logo-BLANCO.png'} alt="logo My Construction" />
            <p>Somos los encargados de hacer su sueño realidad.</p>
            <p>Reduciendo tanto tiempos de obra como costos y adquiriendo nuevos sistemas y comodidades.</p>
          </div>
          <div className="divider">
            <div className="div2">
              <h1>Menú</h1>
              <ul className="footer-list">
                <NavLink to='/' onClick={() => handleLinkClick(null)}>
                  <li className={activeLink === null ? 'active' : ''}>Inicio</li>
                </NavLink>
                <NavLink to='/projects' onClick={() => handleLinkClick('projects')}>
                  <li className={activeLink === 'projects' ? 'active' : ''}>Proyectos</li>
                </NavLink>
                <NavLink to='/terms-of-service' onClick={() => handleLinkClick('terms-of-service')}>
                  <li className={activeLink === 'terms-of-service' ? 'active' : ''}>Términos y condiciones</li>
                </NavLink>
                <NavLink to='/contact' onClick={() => handleLinkClick('contact')}>
                  <li className={activeLink === 'contact' ? 'active' : ''}>Contacto</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="div3">
            <h1>Contáctenos</h1>

            <div className="icon-container">
              <IoLocationSharp className="icons" />
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>Monte Hermoso - Pcia. de Buenos Aires.</p>
            </div>
            <div className="icon-container">
              <MdPhoneIphone className="icons" />
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>2921 49-6693</p>
            </div>
            <div className="icon-container">
              <MdEmail className="icons" />
              <p style={{ fontWeight: 'bolder', fontSize: '20px' }}>info@myconstruction.com.ar</p>
            </div>
            <div className="social-icon-container">
              <a href='https://www.youtube.com/channel/UCMCvyhOssOeKd3D5jbVsLvw' target="_blank">
                <FaYoutube className="social-icons" />
              </a>
              <a href='https://www.facebook.com/myconstruction.arg' target="_blank">
                <FaFacebookF className="social-icons" />
              </a>
              <a href='https://www.instagram.com/myconstruction.arg/' target="_blank">
                <FaInstagram className="social-icons" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p style={{ fontSize: '16px' }}>Copyright © MyConstruction 2020</p>
        </div>
    </footer>
  )
}

export default Footer