import React from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText'
import HoverableButton from './HoverableButton'

const ProjectsPage = () => {
    return (
        <section id="projects" className="flex-col">
            <h2>
                <AnimatedText>
                    My <EmphasisedText>Work</EmphasisedText>
                </AnimatedText>
            </h2>
            <div className="project-container flex-row">
                <h3 className="flex-row">
                    <AnimatedText>
                        Memopa
                    </AnimatedText>
                </h3>
                <div className="projects-info flex-row">
                    <p>
                        <AnimatedText>
                            <EmphasisedText>Memopa</EmphasisedText> is a memory-mapping <EmphasisedText>SaaS</EmphasisedText> made for memory nerds.
                        </AnimatedText>
                    </p>
                    <HoverableButton>
                        Tech
                    </HoverableButton>
                </div>
            </div>

            <div className="project-container flex-row">
                <div className="projects-info flex-row">
                    <HoverableButton>
                        Tech
                    </HoverableButton>
                    <p>
                        <AnimatedText>
                            <EmphasisedText>Typogrid</EmphasisedText> is a font customizing <EmphasisedText>tool</EmphasisedText> for creators.
                        </AnimatedText>
                    </p>
                </div>
                <h3 className="flex-row">
                    <AnimatedText>
                        Typogrid
                    </AnimatedText>
                </h3>
            </div>
        </section>
    )
}

export default ProjectsPage
