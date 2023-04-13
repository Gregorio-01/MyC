import React from 'react'
import "./infoContact.css"

export const InfoContact = () => {
  return (
    <div className='container-info'>
        
          <span className='info-span-1'>Consultas generales</span>
          <span className='info-span-2'>Contáctanos y agendamos una cita, estamos en Coronel Dorrego y Monte Hermoso, provincia de Buenos Aires, Argentina.
          Trabajamos físicamente alrededor del partido y de forma virtual a todas las provincias.</span>
          <span className="separator"></span>
          
          <span className='info-span-1'>Teléfono</span>
          <span className='info-span-2'>+5492921496693</span>
          <span className="separator"></span>
          
          <span className='info-span-1'>E-mail</span>
          <span className='info-span-2'>info@myconstruction.com.ar</span>
          <span className="separator"></span>

          <span className='info-span-1'>Redes sociales</span>

          <div className="div-redes">
            
              <a href="https://www.youtube.com/channel/UCMCvyhOssOeKd3D5jbVsLvw" className='a-redes'>
                <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337232/contact/png-transparent-youtube-logo-computer-icons-youtube-text-rectangle-logo_yrneua.png" className="imagen-redes"  target="_blank"></img>
              </a>
              
              <a href="https://www.facebook.com/My-Construction-Arg-104544731662491" className='a-redes'>
               <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337232/contact/png-transparent-facebook-logo-media-network-social-square-share-social-media-networks-color-shapes-icon_nqh3zp.png" className="imagen-redes"  target="_blank"></img> 
              </a>

              <a href="https://www.instagram.com/myconstruction.arg/" className='a-redes'>
               <img src="https://res.cloudinary.com/do0gmouxr/image/upload/v1681337233/contact/cd939-logo-instagram-png_tnclrv.png" className="imagen-redes"  target="_blank"></img>
              </a>

           </div>
          
      </div>
  )
}
