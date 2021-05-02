import { createContext } from "react";
import useCursorPosition from "../Hooks/useCursorPosition";

export const CursorContext = createContext();

export function CursorProvider({children}) {

    const [ cursorPosition, setCursorPosition ] = useCursorPosition();

    return (
        <CursorContext.Provider 
            value={{cursorPosition, setCursorPosition}}
        >
            {children}
        </CursorContext.Provider>
    )
};