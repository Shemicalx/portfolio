import React from 'react'

const AnimatedText = ({children, animation}) => {

    let text = [children];
    let type = '';
    if(typeof children == 'string') {
        text = children.split('');
        type = 'characters';
    } else {
        text = [children];
        type = 'words';
    }
    console.log(text);

    return (
        text.map( (item, i) => (
            <span 
                key={i} 
                className={`animated-text ${type}`}
                style={{animationDelay: `${i / 50}s`}}
            >
                    {item}
            </span>
        ))
    )
}

export default AnimatedText
