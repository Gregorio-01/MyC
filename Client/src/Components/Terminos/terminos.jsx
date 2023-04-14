import React from "react";
import "./terminos.css"
import { Link } from "react-router-dom";
import TerminosHeader from "./components/terminos-header";
import TerminosBody from "./components/terminos-body";
const Terminos = () => {
    return (
        <div className="about-container">
            <TerminosHeader />
            <TerminosBody />
        </div>
    )
}

export default Terminos