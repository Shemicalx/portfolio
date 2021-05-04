import React from 'react'
import { Link } from 'react-router-dom'
import HoverableButton from './HoverableButton'

const HomePageButtons = ({handleButtonHover}) => {
    return (
        <ul id="home-buttons" className="flex-row">
            <li>
                <HoverableButton hoverHandler={handleButtonHover}>
                    Who
                </HoverableButton>
            </li>
            <li>
                <HoverableButton hoverHandler={handleButtonHover}>
                    <Link className='hoverable-link' to='/contact'>
                        Where
                    </Link>
                </HoverableButton>
            </li>
            <li>
                <HoverableButton hoverHandler={handleButtonHover}>
                    <Link className='hoverable-link' to='/projects'>
                        What
                    </Link>
                </HoverableButton>
            </li>
        </ul>
    )
}

export default HomePageButtons
