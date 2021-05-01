import React, { useState } from 'react'

const HoverableButton = ({setter}) => {

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
        />
    )
}

export default HoverableButton
