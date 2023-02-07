import React from 'react';
import { NavLink } from 'react-router-dom';
import DayNightMode from './DarkMode/DarkMode';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Logo/>
            <ul>
                
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                
                <NavLink to="/about" >
                    <li>About</li>
                </NavLink>
                <NavLink to="/works" >
                    <li>Works</li>
                </NavLink>
                <DayNightMode/>
            </ul>
        </div>
    );
};

export default Navigation;