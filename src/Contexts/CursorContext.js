import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

export function CursorProvider({children}) {

    const [ cursorPosition, setCursorPosition ] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        console.log(cursorPosition);
    },[cursorPosition]);

    return (
        <CursorContext.Provider value={{cursorPosition, setCursorPosition}}>
            {children}
        </CursorContext.Provider>
    )
};