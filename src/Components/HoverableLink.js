import React from 'react'
import { Link } from 'react-router-dom'
import HoverableButton from './HoverableButton'

const HoverableLink = ({children, hoverHandler, to}) => {

    if(!to) return <></>;

    return (
        <HoverableButton 
            hoverHandler={hoverHandler} 
            // rotate={true}
        >
            {
                to[0] === '/' ? (
                    <Link className='hoverable-link' to={to}>
                        {children}
                    </Link>
                ) : (
                    <a 
                        className='hoverable-link' 
                        href={to} 
                        target="_blank" 
                        rel="noreferrer">
                            {children}
                    </a>
                )
            }
        </HoverableButton>
    )
}

export default HoverableLink
