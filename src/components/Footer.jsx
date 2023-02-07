
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>© Session Automne 2022</li>
                <li>THP</li>
                <li>I like 🍕</li>
                <a 
                href="https://github.com/anthonymiloradovic" 
                target="_blank" 
                rel="noopener noreferrer">
                <li>
                    <i className='fab fa-github'></i>
                </li>
</a>
            <a 
                href="https://fr.linkedin.com/in/anthony-miloradovic-2b1b3b1b5" 
                target="_blank" 
                rel="noopener noreferrer">
                <li>
                    <i className='fab fa-linkedin'></i>
                </li>
</a>
            </ul>
        </div>
    );
};

export default Footer;
