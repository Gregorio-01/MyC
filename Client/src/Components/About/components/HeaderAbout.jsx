import React from 'react'
import "./headerAbout.css"

export const HeaderAbout = () => {
  return (
    <div>
  
  {/* div general */}
  <div className="container-top-about">
    
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
        <h6>Somos una empresa de la provincia de Buenos Aires, Argentina, la cual busca completar cada uno de los objetivos y puntos de vista del cliente. Dedicados a la construcción y la innovación de los sistemas tantos constructivos como de servicios, fue fundada por dos Maestros Mayor de Obras con el objetivo principal de concretar el sueño del consumidor, ya sea desde la “casa propia” hasta un “complejo comercial” o cualquier otro tipo de edificación.
        Estamos a disposición, tanto del cliente inmobiliario el cual requiere de maneras efectivas de invertir en capital financiero, como en el cliente que quiere llegar a su primera vivienda o edificar algo en especial.</h6>
      </div>
    </div>
    
    <div className="div-descripcion">
      <h6>También les damos las herramientas a técnicos y profesionales que tengan una gran demanda de trabajos y necesiten una ayuda para poder complementar su dirección de obra, con nuestra proyección o simplemente agilizar su ritmo de trabajo.</h6>
      
      <h6>La idea principal de la empresa es la de agilizar el tiempo de obra y planificación. ¿Cómo se logra?, fácilmente, es normal que en el caso de un cliente que desea construir un proyecto para cualquier destino, tiene un tiempo prolongado de proyección que es el que requiere el técnico de su localidad en realizar toda la planificación del proyecto. Por lo que nosotros nos encargamos de reducir todo ese tiempo para el cliente y ofrecemos una gran variedad de planos y diseños, logrando así la mejor calidad en el menor tiempo posible, reduciendo tiempos y costos de obra.</h6>
    </div>

  </div>
</div>
  )
}
