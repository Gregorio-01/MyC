import React from "react";
import "./card.css"
const Card = () => {
    return (
        <div className="container">
            <div className="card-container">
                <div className="banner-container">
                    <img className="banner" src='https://fvsa.com/wp-content/uploads/2022/05/FV_Banner_N44_Mobile.jpeg'></img>
                </div>
                <div  className="section">
                    <div className="photo-container">
                        <img className="photo" src='data:image/png;base64,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'></img>
                    </div>
                    <h3 className="title">FV Griferias</h3>
                    <div className="products-container">
                        <img className="product-photo" src="https://fvsa.com/wp-content/uploads/2019/01/0412_96-CR.jpg" />
                        <img className="product-photo" src="https://fvsa.com/wp-content/uploads/2019/01/0412_96-CR.jpg" />
                        <img className="product-photo" src="https://fvsa.com/wp-content/uploads/2019/01/0412_96-CR.jpg" />
                    </div>
                    <button className="tienda-button">Ver tienda</button>
                </div>
            </div>
        </div>
    )
}

export default Card