import React from 'react'
import HoverableButton from './HoverableButton'
import HoverableLink from './HoverableLink'

const HomePageButtons = ({handleButtonHover}) => {
    return (
        <ul id="home-buttons" className="flex-row">
            <li>
                <HoverableButton hoverHandler={handleButtonHover}>
                    Who
                </HoverableButton>
            </li>
            <li>
                <HoverableLink hoverHandler={handleButtonHover} to='/contact'>
                    Where
                </HoverableLink>
            </li>
            <li>
                <HoverableLink hoverHandler={handleButtonHover} to='/projects'>
                    What
                </HoverableLink>
            </li>
        </ul>
    )
}

export default HomePageButtons
