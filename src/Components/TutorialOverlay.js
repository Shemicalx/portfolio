import React, { useContext, useEffect, useState } from 'react'
import { CursorContext } from '../Contexts/CursorContext';
import AnimatedText from './AnimatedText';
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton';

const TutorialOverlay = ({setTutorial}) => {

    const [ hover, setHover ] = useState(false);
    const [ hoverCounter, setHoverCounter ] = useState(3);
    const [ text, setText ] = useState(0);
    const { updateCursorPosition } = useContext(CursorContext);

    const textKey = [
        'Hi there!',
        '',
        'Hover the following button',
        '',
    ]

    useEffect(() => {
        if(text < textKey.length) {
            if(text % 2) {
                const textTimer = setInterval(() => setText(()=> text + 1), 700);
                return () => clearInterval(textTimer);
            } else {
                const textTimer = setInterval(() => setText(()=> text + 1), 2000);
                return () => clearInterval(textTimer);
            }
        }
      },[text]);

    useEffect(()=> {
        const hoverTimer = hoverCounter > 0 && hover && setInterval(() => setHoverCounter(hoverCounter - 1), 1000);
        if(!hoverCounter) setTutorial(() => false);
        return () => clearInterval(hoverTimer);
    },[hoverCounter, hover]);

    function handleTutorial(e) {
        if( e.type === 'mouseenter') {
            setHover(()=> true)
        }
        if( e.type === 'mouseleave') {
            setHover(()=> false);
            setHoverCounter(()=> 3);
        }
    }

    return (
        <main 
            id="tutorial" 
            onMouseMove={updateCursorPosition}
            className="flex-col"
        >
            <h1>
                <AnimatedText>
                    { textKey[text] }
                </AnimatedText>
            </h1>
            {
                text >= textKey.length ? (
                <HoverableButton rotate={true} hoverHandler={handleTutorial} size="large">
                    <EmphasisedText>
                        <AnimatedText>
                            { hoverCounter === 3 ? 'Hover' : `${hoverCounter}`}
                        </AnimatedText>
                    </EmphasisedText>
                </HoverableButton>
                ) : (
                    null
                )
            }
        </main>
    )
}

export default TutorialOverlay
