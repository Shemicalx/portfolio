import React, { useState } from 'react'

const HoverableButton = ({setter, rotate, children}) => {

    const [ hovered, setHovered ] = useState(false);
    
    function handleHover(e) {
        setHovered(() => !hovered)
        if(typeof setter == 'function'){
            setter(e);
        } else {
            return
        }
    }
 
    return (
        <button 
            className={`hoverable-button flex-col${hovered ? ' active' : ''}`}
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
        >
            {children ? children : ''}
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
