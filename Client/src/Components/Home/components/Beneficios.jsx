import React from 'react'
import { NavLink } from 'react-router-dom';
import './beneficios.css'
import { FaUserCheck, FaHandsHelping, FaCalendarCheck } from "react-icons/fa";


export const Beneficios = () => {
  return (
    <div className="container-beneficios">
      <div  data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" 
            >
        <div className="titulo-beneficios">
          <h1><span style={{color: "#f37121",marginRight:"10px"}}>|</span>BENEFICIOS</h1>
        </div>

        <p>
          Beneficios trae muchos, pero el principal es el hecho de que con solo una idea y elegir un diseño, en menos de una semana ya usted obtiene todos los planos necesarios para poder empezar la obra, que, en caso de ir a un contratista físico, está el factor de tiempo de demora, ya que su proyecto no va a ser el único en el que se enfoque este.
        <br/>
          Por lo tanto nosotros ofrecemos un servicio de rapidez y compromiso con el cliente.
        <br/>
           En el caso de que se requiera un trabajo más específico, se podrá contactar con nosotros y podremos realizar una proyección de manera directa con el cliente.
        </p>
      </div>

        <div className="contenedor-cajas">
        
        <NavLink to='/projects'>
          <div className="caja-naranja">
            <FaCalendarCheck style={{ fontSize: '10vh' }}/>
            <h4>Rapidez</h4>
          </div>
        </NavLink>

        <NavLink to='/about'>
          <div className="caja-naranja">
            <FaHandsHelping style={{ fontSize: '10vh' }}/>
            <h4>Compromiso con el cliente</h4>
          </div>
        </NavLink>

        <NavLink to='/contact'>
          <div className="caja-naranja">
            <FaUserCheck style={{ fontSize: '10vh' }}/>
            <h4>Atención personalizada</h4>
          </div>
        </NavLink>

        </div>

      </div>
  )
}
