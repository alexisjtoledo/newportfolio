import React, { useState } from 'react'
import { DEV_PROJECTS, GDS_PROJECTS } from '../constants/Data'
import ProjectCard from './ProjectCard'

const ProjectIndex = props => {

    const { type } = props
    const [projects] = useState(type === 'left' ? DEV_PROJECTS : GDS_PROJECTS)

    return (
        <div className='pindex-container'>
            <h1 className="projects-title">TITULO DE LA SECCIÓN DE DEV</h1>
            <p className="projects-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur doloribus vitae cum consequuntur nulla quidem molestias aperiam odit error neque placeat velit id eum in sequi quas, possimus harum.</p>

            <div className="project-card-container">
                <ProjectCard project={projects} />
            </div>
            
        </div>
    )
}

export default ProjectIndex