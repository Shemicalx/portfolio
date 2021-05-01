import React, { useEffect, useState } from 'react'
import HoverableButton from './HoverableButton';

const TutorialOverlay = ({setTutorial}) => {

    const [ hover, setHover ] = useState(false);
    const [counter, setCounter] = useState(2);

    useEffect(()=> {
        const hoverTimer = counter > 0 && hover && setInterval(() => setCounter(counter - 1), 1000);
        console.log(counter);
        if(!counter) setTutorial(() => false);
        return () => clearInterval(hoverTimer);
    },[counter, hover]);

    function handleTutorial(e) {
        if( e.type === 'mouseenter') {
            setHover(()=> true)
        }
        if( e.type === 'mouseleave') {
            setHover(()=> false);
            setCounter(()=> 2);
        }
    }

    return (
        <div 
            id="tutorial" 
            // onClick={handleTutorial}
            className="flex-col"
        >
            <HoverableButton setter={handleTutorial} />
        </div>
    )
}

export default TutorialOverlay
