import React, { useContext, useEffect, useState } from 'react'
import { DeviceContext } from '../Contexts/DeviceContext'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText'
import HoverableButton from './HoverableButton'

const ProjectContainer = ({title, description, tech, to, reverse}) => {

    const { device } = useContext(DeviceContext);
    const [ showTech, setShowTech ] = useState(false);
    const [ paragraph, setParagraph ] = useState('');

    const isSmall = device === 'small' || device === 'extra-small';

    useEffect(()=> {
        setParagraph(()=>{
            return showTech ? tech : description
        })
    },[showTech]);

    //need to add tech feature
    function handleTechHover(e) {
        setParagraph(()=> '')
        if(e.type === 'mouseenter') setShowTech(()=>true);
        if(e.type === 'mouseleave') setShowTech(()=>false);
    }

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
            <div className={`project-info flex-row${reverse ? ' reverse' : ' normal'} ${device}`}>
                <p className={device}>
                    <EmphasisedText>
                        {title} {showTech ? 'how?' : 'what?'}
                    </EmphasisedText>
                    <span>
                        <AnimatedText>
                            {paragraph}
                        </AnimatedText>
                    </span>
                </p>
                {
                    isSmall ? (
                        <p className={device}>
                            <span>
                                <AnimatedText>
                                    {tech}
                                </AnimatedText>
                            </span>
                        </p>
                    ) : (
                        <HoverableButton size="small" hoverHandler={handleTechHover}>
                            How
                        </HoverableButton>
                    )
                }
            </div>
        </div>
    )
}

export default ProjectContainer
