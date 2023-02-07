import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
            <img src='https://e7.pngegg.com/pngimages/802/1022/png-clipart-laborer-employment-agency-job-employment-agency-service-logo.png' alt='logo' />
            </NavLink>
        </div>
    );
};

export default Logo;