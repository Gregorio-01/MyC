import React from 'react'
import "./nosotros.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const Nosotros = () => {
  return (
    <div>
        <div className="home-logo-container"
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out" >
        <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681232854/home/LOGO-GDE-2_z9h4rd.png" alt="logo-constructor"/>
        </div>

      {/* div general */}
      <div className="container-top">
        
        {/* div del video y su texto */}  
        <div className="container-vid">

          <div className="div-video"
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out" >
            <a className="modal-video-poster video-modal" href="https://www.youtube.com/watch?v=dfjgBpwLiRs">
                <img alt="Video poster" src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681244950/home/intro_ou7bjt.png"/>
                <button className="boton-play"></button>
            </a>
          </div>

          <div className="div-nosotros">
            <div  data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" 
            >
            <h1><span style={{color: "#f37121",marginRight:"10px"}}>|</span>NOSOTROS</h1>
            </div>
            <h6>Somos una empresa proveniente de la provincia de Buenos Aires, Argentina. La cual busca completar cada uno de los objetivos y puntos de vista del cliente.
            Dedicados a la construcción y la innovación de los sistemas tantos constructivos como de servicios, la empresa fue fundada por dos Maestros Mayor de Obras con el objetivo principal de concretar el sueño del consumidor, ya sea desde la “casa propia” hasta un “complejo comercial” o cualquier otro tipo de edificación.</h6>
          </div>
        </div>
        
        <div className="div-descripcion">
          <h6>
          Hoy en día la empresa cuenta con un equipo de técnicos dedicados tanto a la proyección, dirección de obra y también de maquetado y renderizado 3D, realizando trabajos para toda la provincia de Buenos Aires y sus provincias cercanas. Nos dedicamos única y exclusivamente al cliente y a sus necesidades, ofreciéndoles tanto proyecciones ya calculadas, diseñadas y computadas, como también servicios de construcciones fuera de lo tradicional, como pueden ser modulares con contenedores marítimos o de steelframing, entre otros. Como también la posibilidad de anexar sistemas de energías renovables.
          </h6>
        </div>

      </div>
    </div>
  )
}


