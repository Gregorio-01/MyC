import React from 'react'
import "./ecoConstruccion.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const EcoConstruccion = () => {
  return (
    <div className="container-ecoconstruccion">
        
    <div className="container-vid">

      <div className="div-video"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
        <a class="modal-video-poster video-modal" href="https://www.youtube.com/watch?v=1-Bjm2AxoJ8&ab_channel=MYCONSTRUCTIONARG">
            <img alt="Video poster" src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681244947/home/2_kxaafm.jpg"/>
            <button className="boton-play"></button>
        </a>
      </div>

      <div className="div-descripcion-eco">
           <div  data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" 
            >
          <h1><span style={{color: "#f37121",marginRight:"10px"}}>|</span>ECO-CONSTRUCCIÓN</h1>
          </div>
          <h6>Debido a los cambios impacto / ambientales, nos encargamos de proyectar en base a los recursos para reducir la contaminación y obtener mayor beneficio de las energías renovables.</h6>
      </div>
    </div>
    

  </div>
  )
}
