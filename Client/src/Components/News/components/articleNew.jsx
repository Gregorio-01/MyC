import React from 'react'
import { Link } from 'react-router-dom';
import "./articleNew.css"

export const ArticleNew = ({ image, title, date, description, subTitle, link }) => {
    return (
        <article className="new-container">
            <figure className="new-image-container">
                <img src={image} alt={title} className='new-image' />
                <div class="new-hover">
                    <Link to={link}>
                        <div className="new-hover-button">
                            <p>+</p>
                        </div>
                    </Link>
                </div>
            </figure>
            <section className="title_date-container">
                <h4>{title}</h4>
                <h4>/ {date}</h4>
            </section>
            <h2>{description}</h2>
            <h5 className="subtitle">{subTitle}</h5>
            <Link to={link} className="ver-mas">
                <h4>ver mas...</h4>
            </Link>
        </article>
    )
}