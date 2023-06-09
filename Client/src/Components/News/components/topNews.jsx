import React from 'react'
import { Link } from 'react-router-dom';
import "./topNews.css"

export const TopNews = () => {
  return (
  <div className="news-div-top">
    <h1 className="about-title">Noticias e información</h1>
      <div className='div-inico-about'>
        <Link to="Home">
            <p className='p-inicio-about'>Inicio</p>
        </Link>
        <span className='icono-about'>&gt;</span>
        <span> Noticias </span>
      </div>
  </div>
  )
}