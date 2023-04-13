import React from 'react'
import { Link } from 'react-router-dom';
import "./topContact.css"

export const TopContact = () => {
  return (
  <div className="contact-div-top">
    <h1 className="contacto-title">Contacto</h1>
      <div className='div-inico-contacto'>
        <Link to="Home">
            <p>Inicio</p>
        </Link>
        <span className='icono-contacto'>&gt;</span>
        <span> Contacto </span>
      </div>
  </div>
  )
}
