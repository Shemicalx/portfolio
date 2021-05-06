import React from 'react'
import HoverableButton from './HoverableButton'
import HoverableLink from './HoverableLink'

const HomePageButtons = ({handleButtonHover, children}) => {
    return (
        <ul id="home-buttons" className="flex-row">
            {
                children.map( (child, i) => {
                    return (
                        <li key={i}>
                            {
                                child[1] ? (
                                    <HoverableLink hoverHandler={handleButtonHover} to={child[1]}>
                                        {child[0]}
                                    </HoverableLink>
                                ) : (
                                    <HoverableButton hoverHandler={handleButtonHover}>
                                        {child[0]}
                                    </HoverableButton>
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HomePageButtons
