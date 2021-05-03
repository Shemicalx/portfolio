import { useEffect, useState } from "react";
import { deviceStyles } from '../Info/CssVariables';

export default function useDeviceSize() {

    // small / medium / large
    const [ device, setDevice ] = useState('small');

    const handleScreenResize = (e) => {
        setDevice(() => {
            return checkScreenWidth();
        });
    };

    const checkScreenWidth = () => {
        let size = 'small';
        if( window.innerWidth < 400 ) size = 'small';
        if( window.innerWidth >= 600 ) size = 'medium';
        if( window.innerWidth >= 830 ) size = 'large';
        return size;
    };

    useEffect(()=> {
        setDevice(checkScreenWidth);
    },[])

    useEffect(()=> {
        window.addEventListener('resize', handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize);
    },[]);

    useEffect(()=> {
        Object.entries(deviceStyles[device]).map (([key, value], index)=> {
            document.documentElement.style.setProperty(key, value);
        });
    },[device]);

    return [ device, setDevice ];

}