import React from 'react'

const ProjectsPage = () => {
    return (
        <section id="projects" className="flex-col">
            <h2>Projects</h2>
            <div className="project-container flex-row">
                <h3>Memopa</h3>
                <p>Memopa is a memory-mapping tool made for memory nerds.</p>
            </div>

            <div className="project-container flex-row">
                <p>Typogrid is a font customizing tool for creators.</p>
                <h3>Typogrid</h3>
            </div>
        </section>
    )
}

export default ProjectsPage
