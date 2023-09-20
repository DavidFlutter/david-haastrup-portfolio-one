import React from 'react'
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <div className='ProjectsSection' id='ProjectsSection'>
        <h2>Selected Projects</h2>
        <div className="projects-container">
            {projects.map(project => (
                <div className="project-tile"key={project.id}>
                    <div className="image">
                        <img src={project.image} alt={`${project.name}`} />
                    </div>
                    <div className="content">
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <div className="buttons">
                            <a href={project.link}
                                target='_blank' rel="noreferrer"
                            >View live</a>
                            <a href={project.github}
                                target='_blank' rel="noreferrer"
                            >See code</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsSection