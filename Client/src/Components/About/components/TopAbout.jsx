import React from 'react'
import { Link } from 'react-router-dom';
import "./topAbout.css"

export const TopAbout = () => {
  return (
  <div className="about-div-top">
    <h1 className="about-title">¿Quiénes somos?</h1>
      <div className='div-inico-about'>
        <Link to="Home">
            <p className='p-inicio-about'>Inicio</p>
        </Link>
        <span className='icono-about'>&gt;</span>
        <span> ¿Quiénes somos? </span>
      </div>
  </div>
  )
}
