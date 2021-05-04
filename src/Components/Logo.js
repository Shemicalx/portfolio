import React from 'react'

const Logo = ({mode}) => <div className={`logo ${mode !== undefined ? mode : ''}`} />;

export default Logo
