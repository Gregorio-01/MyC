import { NavLink } from 'react-router-dom';

import "./contact.css"

const Contact = () => {
    return (
      <div className="contact-container">
        
        <div className="contact-div-top">
          <h1 className="contacto-title">Contacto</h1>
          <div className='div-inico-contacto'>
            <NavLink to="Home">
              <a>Inicio</a>
            </NavLink>
            <span className="span-contacto"> Contacto </span>
          </div>
          
        </div>


      </div>
    )
  }
  
  export default Contact