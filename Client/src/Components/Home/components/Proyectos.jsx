import React from 'react'
import './proyectos.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const Proyectos = () => {
  return (
    <div className="container-proyectos">
        <div  data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" 
            >
        <h2><span style={{color: "#f37121",marginRight:"10px"}}>|</span> PROYECTOS </h2>
        </div>
        
        <div className="container-imagenProyecto">
          <div className="container-img">
            <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681243018/home/DORMIS-Exterior-2-900x556_aozfy5.jpg"></img>
            <div className="container-costanera">
                <div className="costanera-subtitlte"><span style={{color: "white",marginRight:"10px",fontSize:"25px"}}>|</span><h5>MC, MY CONSTRUCTION</h5></div>
                <h1>Complejo Costanera</h1>
                <p>El complejo se compone de tres dormis funcionales para un alojo vacacional de inquilinos. </p>
                <div className="container-plus">
                  <h1>+</h1>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
