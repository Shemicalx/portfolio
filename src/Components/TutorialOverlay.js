import React, { useContext, useEffect, useState } from 'react'
import { CursorContext } from '../Contexts/CursorContext';
import AnimatedText from './AnimatedText';
import EmphasisedText from './EmphasisedText';
import HoverableButton from './HoverableButton';

const TutorialOverlay = ({setTutorial}) => {

    const [ hover, setHover ] = useState(false);
    const [counter, setCounter] = useState(3);
    const { updateCursorPosition } = useContext(CursorContext);

    useEffect(()=> {
        const hoverTimer = counter > 0 && hover && setInterval(() => setCounter(counter - 1), 1000);
        if(!counter) setTutorial(() => false);
        return () => clearInterval(hoverTimer);
    },[counter, hover]);

    function handleTutorial(e) {
        if( e.type === 'mouseenter') {
            setHover(()=> true)
        }
        if( e.type === 'mouseleave') {
            setHover(()=> false);
            setCounter(()=> 3);
        }
    }

    return (
        <div 
            id="tutorial" 
            onMouseMove={updateCursorPosition}
            className="flex-row"
        >
            <HoverableButton rotate={true} hoverHandler={handleTutorial}>
                <EmphasisedText>
                    <AnimatedText>
                        { counter === 3 ? 'Hover' : <span style={{'fontSize': '2.2rem'}}>{counter}</span>}
                    </AnimatedText>
                </EmphasisedText>
            </HoverableButton>
        </div>
    )
}

export default TutorialOverlay
