import { useEffect, useState } from "react";

export default function useCursorPosition () {
    
    const [ cursorPosition, setCursorPosition ] = useState({ 
        x: null, 
        y: null
    });

    const updatePosition = (e) => {
        if(/hoverable-button /.test(e.target.className)){
            setCursorPosition(()=> {
                const {x, y, height, width} = e.target.getBoundingClientRect();
                return {x, y, height, width, focused: true};
            });
        } else {
            setCursorPosition({ x: e.clientX, y: e.clientY, focused: false});  
        }
    };
    
    useEffect(()=>{
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    },[]);

    return [ cursorPosition, setCursorPosition ];
}