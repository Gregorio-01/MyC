import React from 'react'
import { Link } from 'react-router-dom';
import "./topProjects.css"

export const TopProjects = () => {
  return (
  <div className="projects-div-top">
    <h1 className="projects-title">Noticias e información</h1>
      <div className='div-inico-projects'>
        <Link to="Home">
            <p className='p-inicio-projects'>Inicio</p>
        </Link>
        <span className='icono-projects'>&gt;</span>
        <span> Noticias </span>
      </div>
  </div>
  )
}