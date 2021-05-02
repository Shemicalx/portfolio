import React, { useState } from 'react'
import AnimatedText from './AnimatedText'
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton'

const HomePage = () => {

    const [ currentInfo, setCurrentInfo ] = useState('');

    return (
        <section id="home" className="flex-col">
            <h1>
                <AnimatedText>
                    Noam
                <br/>
                    <EmphasisedText>
                        Shemi
                    </EmphasisedText>
                </AnimatedText>
            </h1>
            <p>
                <AnimatedText>
                    I make things that work. 
                </AnimatedText>
            </p>
            <ul id="home-buttons" className="flex-row">
                <li>
                    <HoverableButton>Who</HoverableButton>
                </li>
                <li>
                    <HoverableButton>Where</HoverableButton>
                </li>
                <li>
                    <HoverableButton>What</HoverableButton>
                </li>
            </ul>
        </section>
    )
}

export default HomePage
