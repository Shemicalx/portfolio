import React from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText'
import ProjectContainer from './ProjectContainer'

const ProjectsPage = () => {
    return (
        <section id="projects" className="flex-col">
            <h2>
                <AnimatedText>
                    My <EmphasisedText>Portfolio</EmphasisedText>
                </AnimatedText>
            </h2>

            <ProjectContainer 
                title='Memopa'
                description="A memory-mapping and mnemonic converting SaaS."
                tech="HTML, CSS, SASS, JavaScript, React | Hooks | Context API, Express.js, MongoDB, Firebase."
                to="https://memopa.com/"
            />

            <ProjectContainer
                title="Typogrid"
                description="A font finding and customizing tool for creators."
                tech="HTML, CSS, JavaScript, React, Google-Fonts API."
                reverse={true}
                to="https://typogrid.netlify.app/"
            />
        </section>
    )
}

export default ProjectsPage
