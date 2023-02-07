import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
                <img src="./public/logo.png" alt="logo" />
            </NavLink>
        </div>
    );
};

export default Logo;