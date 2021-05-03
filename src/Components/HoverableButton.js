import React, { useState } from 'react'

const HoverableButton = ({hoverHandler, rotate, children}) => {

    const [ hovered, setHovered ] = useState(false);
    
    function handleHover(e) {
        if(e.type === 'mouseleave') setHovered(() => false);
        if(e.type === 'mouseenter') setHovered(() => true);
        if(typeof hoverHandler == 'function'){
            hoverHandler(e);
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
                className={`hoverable-button-decoration${hovered ? ' active' : ''}${rotate ? ' rotate' : ''}`} 
            />
        </button>
    )
}

export default HoverableButton
