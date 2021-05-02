import React, { useEffect, useState } from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton'
import { aboutText } from '../text'

const HomePage = () => {

    const [ hoveredButton, setHoveredButton ] = useState('default')
    const [ paragraph, setParagraph ] = useState('');
    const [ title, setTitle ] = useState('');

    useEffect(()=> {
        let update = {};
        if(typeof aboutText[hoveredButton] == 'object') update = aboutText[hoveredButton];
        if(typeof aboutText[hoveredButton] != 'object') update = aboutText['default'];
        setParagraph(()=> update.paragraph)
        setTitle(()=> update.title)
    },[hoveredButton]);
    
    function handleButtonHover (e) {
        setParagraph(()=> '');
        setTitle(()=> '');
        if(e.type === 'mouseenter') setHoveredButton(()=> e.target.innerText);
        if(e.type === 'mouseleave') setHoveredButton(()=> 'default');
    };

    return (
        <section id="home" className="flex-col">
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
            <p>
                <AnimatedText>
                    {paragraph}
                </AnimatedText>
            </p>
        </section>
    )
}

export default HomePage
