import React from "react";
import "./slider-card.css"
const SliderCard = ({name, banner, photo, product1, product2, product3}) => {
    return (
        <div className="associate-container">
            <div className="slider-card-container">
                <div className="slider-banner-container">
                    <img className="banner" src={banner}></img>
                </div>
                <div  className="slider-section">
                    <h3 className="slider-associate-name">{name}</h3>
                    <button className="slider-tienda-button">Ver tienda</button>
                </div>
            </div>
        </div>
    )
}

export default SliderCard