import React from "react";
import { Link } from "react-router-dom";
const TerminosHeader = () => {
    return (
        <div className="about-div-top">
            <h1 className="about-title">Términos y condiciones</h1>
            <div className='div-inico-about'>
                <Link to="Home">
                    <p className='p-inicio-about'>Inicio</p>
                </Link>
                <span className='icono-about'>&gt;</span>
                <span> Términos y condiciones </span>
            </div>
        </div>
    )
}

export default TerminosHeader