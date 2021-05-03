import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText';
import { aboutText } from '../Info/text'
import { DeviceContext } from '../Contexts/DeviceContext';
import HomePageButtons from './HomePageButtons';
import Logo from './Logo';

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
            if(device === 'small' || device === 'extra-small'){
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
            <h1 id="home-title" className={`${device}`}>
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
                (device === 'medium' || device === 'large') && (
                    <HomePageButtons handleButtonHover={handleButtonHover} />
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
