import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton'
import { aboutText } from '../Info/text'
import { DeviceContext } from '../Contexts/DeviceContext';

const HomePage = () => {

    const [ hoveredButton, setHoveredButton ] = useState('default')
    const [ paragraph, setParagraph ] = useState('');
    const [ title, setTitle ] = useState('');
    const { device } = useContext(DeviceContext);

    useEffect(()=> {
        let update = {};
        if(typeof aboutText[hoveredButton] == 'object') update = aboutText[hoveredButton];
        if(typeof aboutText[hoveredButton] != 'object') update = aboutText['default'];
        setParagraph(()=> {
            if(device === 'small'){
                return aboutText.Who.paragraph
            }
            return update.paragraph
        })
        setTitle(()=> update.title)
    },[hoveredButton, device]);
    
    function handleButtonHover (e) {
        setParagraph(()=> '');
        setTitle(()=> '');
        if(e.type === 'mouseenter') {
            setHoveredButton(()=> e.target.innerText);
            return;
        };
        setHoveredButton(()=> 'default');
    };

    return (
        <section id="home" className={`flex-col ${device}`}>
            <h1>
                <AnimatedText>
                    Noam
                    <br/>
                    <EmphasisedText>
                        <AnimatedText>
                            {title}
                        </AnimatedText>
                    </EmphasisedText>
                </AnimatedText>
            </h1>
            {
                device !== 'small' && (
                    <ul id="home-buttons" className="flex-row">
                        {
                            ['Who', 'How', 'What'].map( (topic, i) => {
                                return (
                                    <li key={topic + i}>
                                        <HoverableButton hoverHandler={handleButtonHover}>
                                            {topic}
                                        </HoverableButton>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
            <p className={device}>
                <AnimatedText>
                    {paragraph}
                </AnimatedText>
            </p>
        </section>
    )
}

export default HomePage
