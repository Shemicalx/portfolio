import React, { useContext, useEffect, useState } from 'react'
import { CursorContext } from '../Contexts/CursorContext';
import HoverableButton from './HoverableButton';

const TutorialOverlay = ({setTutorial}) => {

    const [ hover, setHover ] = useState(false);
    const [counter, setCounter] = useState(1);
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
            setCounter(()=> 1);
        }
    }

    return (
        <div 
            id="tutorial" 
            onMouseMove={updateCursorPosition}
            className="flex-col"
        >
            <HoverableButton rotate={true} setter={handleTutorial} />
        </div>
    )
}

export default TutorialOverlay
