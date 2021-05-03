import React, { useContext, useState } from 'react'
import { DeviceContext } from '../Contexts/DeviceContext';
import EmphasisedText from './EmphasisedText';
import Logo from './Logo';
import SidebarNavLinks from './SidebarNavLinks';

const Sidebar = () => {

    const [ mode, setMode ] = useState('');
    const { device } = useContext(DeviceContext);

    function handleHover(e) {
        setMode(()=> {
            return e.type === 'mouseenter' ? 'active' : ''
        })
    }

    return (
        <div 
            id="sidebar" 
            className={`flex-col ${mode} ${device}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
        {
            mode === 'active' ? (
                <SidebarNavLinks />
            ) : (
                <Logo />
            )
        }
        </div>
    )
}

export default Sidebar
