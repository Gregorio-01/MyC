import React from "react";
import "./card.css"
const Card = ({name, banner, photo, product1, product2, product3, link}) => {
    return (
        // <div className="container">
            <div className="card-container">
                <div className="banner-container">
                    <img className="banner" src={banner}></img>
                </div>
                <div  className="section">
                    <div className="photo-container">
                        <img className="photo" src={photo}></img>
                    </div>
                    <h3 className="associate-name">{name}</h3>
                    <div className="products-container">
                        <img className="product-photo" src={product1} />
                        <img className="product-photo" src={product2} />
                        <img className="product-photo" src={product3} />
                    </div>
                    <a className="tienda-button" href={link? link : null} target='_blank'>Ver tienda</a>
                </div>
            </div>
        // </div>
    )
}

export default Card