import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Logo/>
            <ul>
                
                <NavLink to="/" className={(nav) =>
                (nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>About</li>
                </NavLink>
                <NavLink to="/works" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Works</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;