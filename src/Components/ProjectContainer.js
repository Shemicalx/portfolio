import React from 'react'
import AnimatedText from './AnimatedText'
import HoverableButton from './HoverableButton'

const ProjectContainer = ({title, description, tech, to, reverse}) => {
    return (
        <div className={`project-container flex-row${reverse ? ' reverse' : ''}`}>
            <h3 className="flex-row">
                <AnimatedText>
                    {title}
                </AnimatedText>
            </h3>
            <div className={`projects-info flex-row${reverse ? ' reverse' : ''}`}>
                <p>
                    <AnimatedText>
                        {description}
                    </AnimatedText>
                </p>
                <HoverableButton>
                    Tech
                </HoverableButton>
            </div>
        </div>
    )
}

export default ProjectContainer
