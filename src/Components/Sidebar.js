import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DeviceContext } from '../Contexts/DeviceContext';
import HoverableButton from './HoverableButton';
import Logo from './Logo';
import SidebarNavLinks from './SidebarNavLinks';

const Sidebar = () => {

    const [ mode, setMode ] = useState('');
    const [ logoMode, setLogoMode] = useState('');
    const { device } = useContext(DeviceContext);

    useEffect(()=> {
        if(device === 'large' || device === 'medium') setMode(()=> 'active');
        if(device === 'small' || device === 'extra-small') setMode(()=> '');
    }, [device])

    function logoHoverHandler (e) {
        setLogoMode(() => {
            return e.type === 'mouseenter' ? 'active' : ''
        })
    }

    return (
        <div 
            id="sidebar" 
            className={`flex-col ${mode} ${device}`}
        >
            <HoverableButton 
                rotate={true} 
                size={'small'}
                hoverHandler={logoHoverHandler}
            >
                <Link className='hoverable-link' to='/'>
                    <Logo mode={logoMode} />
                </Link>
            </HoverableButton>
        {
            mode === 'active' && <SidebarNavLinks />
        }
        </div>
    )
}

export default Sidebar
