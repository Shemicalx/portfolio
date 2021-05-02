import React, { useState } from 'react'

const HoverableButton = ({setter, rotate}) => {

    const [ hovered, setHovered ] = useState(false);
    
    function handleHover(e) {
        setHovered(() => !hovered)
        setter(e);
    }
 
    return (
        <button 
            className={`hoverable-button ${hovered ? 'active' : ''}`}
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
        >
            <div 
                className={`
                    hoverable-button-decoration 
                    ${hovered ? 'active' : ''}
                    ${rotate ? 'rotate' : ''}    
                `} 
            />
        </button>
    )
}

export default HoverableButton
