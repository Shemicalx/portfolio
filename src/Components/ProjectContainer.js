import React, { useContext } from 'react'
import { DeviceContext } from '../Contexts/DeviceContext'
import AnimatedText from './AnimatedText'
import HoverableButton from './HoverableButton'

const ProjectContainer = ({title, description, tech, to, reverse}) => {

    const { device } = useContext(DeviceContext);

    const isSmall = device === 'small' || device === 'extra-small';

    //need to add tech feature

    return (
        <div className={`project-container flex-row${reverse ? ' reverse' : ' normal'} ${device}`}>
            <h3 className={`project-title${reverse ? ' reverse' : ' normal'}`}>
                <a 
                    className={`flex-row ${device}`}
                    href={to || '#'} 
                    target='_blank' 
                    rel="noreferrer" 
                >
                    <AnimatedText>
                        {title}
                    </AnimatedText>
                </a>
            </h3>
            <div className={`project-info flex-row${reverse ? ' reverse' : ' normal'}`}>
                <p className={device}>
                    <AnimatedText>
                        {description}
                    </AnimatedText>
                </p>
                {
                    isSmall ? (
                        null
                    ) : (
                        <HoverableButton>
                            Tech
                        </HoverableButton>
                    )
                }
            </div>
        </div>
    )
}

export default ProjectContainer
