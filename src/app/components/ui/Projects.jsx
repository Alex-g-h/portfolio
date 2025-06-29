import React from 'react'
import { ProjectsData } from '../../data/projectsData'
import ProjectSlider from '../common/ProjectSlider'

const Projects = () => {
  return (
    <div className="main">
      <div className="projects">
        <div className="projects__caption">Мои проекты</div>
        {ProjectsData.map((p) => (
          <div
            className="project"
            key={p.id}
          >
            <ProjectSlider {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
