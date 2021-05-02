import React, { useContext } from 'react'
import { CursorContext } from '../Contexts/CursorContext'

const Cursor = () => {

    const { cursorPosition } = useContext(CursorContext);
    const position = {
        top: cursorPosition.y,
        left: cursorPosition.x,
        height: cursorPosition.height,
        width: cursorPosition.width,
    }

    return (
        <span 
            id="cursor" 
            className={`${cursorPosition.focused ? 'focused' : 'free'}`} 
            style={position} 
        />
    )
}

export default Cursor
