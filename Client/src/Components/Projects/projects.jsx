import "./projects.css"
import information from "./data"
import Project from "./components/project"

const Projects = () => {
  return (
    <article className="projects-container" >
      <section className="projects-grid">
        {
          information.map(info => <Project title={info.title} link={info.linkName} image={info.image} subtitle={info.subTitle} />)
        }
      </section>
    </article>
  )
}

export default Projects