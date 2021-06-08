import React, { useState } from 'react'

const HoverableButton = ({hoverHandler, rotate, size, submit, loading ,children}) => {

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
            className={`hoverable-button flex-row${hovered ? ' active' : ''} ${size !== undefined ? size : ''}${loading ? ' disabled' : ''}`}
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover}
            // onClick={handleClick}
            type={submit ? 'submit' : 'button'}
        >
            {children ? children : ''}
            <div 
                className={`hoverable-button-decoration${hovered ? ' active' : ''}${rotate ? ' rotate' : ''}`} 
            />
        </button>
    )
}

export default HoverableButton
