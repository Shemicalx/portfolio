import React, { useState } from 'react'

const EmphasisedText = ({children}) => {

    const [ isHovered, setIsHovered ] = useState(false);

    function handleHover(e) {
        //add when hover animations are wanted
        // if(e.type === 'mouseenter') setIsHovered(()=> true);
        // if(e.type === 'mouseleave') setIsHovered(()=> false);
    }

    return (
        <span 
            className={`emphasised-text`}
            // onMouseEnter={handleHover}
            // onMouseLeave={handleHover}
        >
            {children}
        </span>
    )
}

export default EmphasisedText
