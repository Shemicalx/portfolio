import React from 'react'

const HoverableButton = ({setter}) => {

    return (
        <button onMouseEnter={setter} onMouseLeave={setter}>Oi</button>
    )
}

export default HoverableButton
