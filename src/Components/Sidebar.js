import React, { useState } from 'react'
import SidebarNavLinks from './SidebarNavLinks';

const Sidebar = () => {

    const [ mode, setMode ] = useState('');

    function handleHover(e) {
        setMode(()=> {
            return e.type === 'mouseenter' ? 'active' : ''
        })
    }

    return (
        <div 
            id="sidebar" 
            className={`flex-col ${mode}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
        {
            mode === 'active' ? <SidebarNavLinks /> : ''
        }
        <div id="logo">Logo</div>
        </div>
    )
}

export default Sidebar
