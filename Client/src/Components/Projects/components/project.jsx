import "./project.css"
import { Link } from "react-router-dom"

const Project = ({ image, title, subtitle, link }) => {
    return (
        <article className="project-container" >
            <Link to={link}>
                <img src={image} alt={title} />
            </Link>
            <h4>{subtitle}</h4>
            <Link to={link} className="project-container-title">
                <h2>{title}</h2>
            </Link>
        </article>
    )
}

export default Project