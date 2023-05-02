import React from 'react'
import './beneficios2.css'

export const Beneficios2 = () => {
  return (
    <div className='ben-body'>
      <div className="ben-wrapper">
       
       <div className="ben-beneficios">
          <h1 className='ben-h1'>Beneficios</h1>
          <h3 className='ben-h3'>
            Los Beneficios de ser asociado de My Construction, se generan a
            partir de la conexión de la plataforma con constructoras, empresas,
            clientes e inmobiliarias. Siendo así, que ofrecemos múltiples
            servicios y nos enfocamos en hacer crecer profesionales y empresas
            mediante software.
          </h3>
        </div>

        <div className="ben-title-equipo">
          <h2>
            <br />
            Estudiantes y Profesionales
          </h2>
        </div>

        <br />

        <div className="ben-text-equipo">
          <h3 className='ben-h3'>
            Somos una empresa que busca conectarte con clientes, inmobiliarias,
            empresas constructoras y demás compañeros del rubro. En nuestra
            plataforma podrá desarrollarse con cursos, charlas y dispondrá de
            recursos tecnológicos y materiales para aprender y poder realizar
            trabajos con todas las herramientas al alcance de la mano.
          </h3>
          <h3 className='ben-h3'>
            Dentro de la página, podrás subir proyectos, trabajos realizados,
            noticias, y cualquier información que desees. Pero nuestro fuerte se
            basa en la venta de proyectos completos para ahorrar los plazos de
            obra de ante-proyecto y proyecto.
          </h3>
          <br />
          
          <div className="ben-imgEst">
            <img src="../img/Tarjets/est.png" alt="" />
          </div>
        </div>


        {/* <!-- Segunda Seccion --> */}

        <div className="title-equipo2">
          <h2>Empresas</h2>
        </div>

        <div className="text-equipo2">
          <h3 className='ben-h3'>
            La plataforma también integra empresas proveedoras de servicios,
            materiales e insumos, para darles alcance y clientes profesionales.
          </h3>
          <h3 className='ben-h3'>
            Contamos con más de 80 profesionales y estudiantes, usuarios
            activos, de todas las partes del país, siendo que se pueden
            encontrar de: Mendoza, Bahía Blanca, Monte Hermoso, y otras
            ciudades, abarcando Ingenieros Civiles, Arquitectos, M.M.O,
            Seguridad e Higiene, Decoración de Interiores, con el fin de
            conectarlos con sus primeras inserciones laborales o por desarrollo
            propio y uso del software como herramienta de productividad en el
            transcurso de sus actividades.
          </h3>
          <h3 className='ben-h3'>
            Por lo que tenemos una sección dentro de la página llamada "Empresas
            Asociadas", donde allí, encontrarían todos sus productos!
            Tú puedes ser el próximo!
            
          </h3>
         
          <br />
          
        </div>

       
      </div>
     
    </div>
  )
}
