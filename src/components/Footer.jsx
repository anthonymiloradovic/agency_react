// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>© 2023 - Tout droits réservés</li>
                <li>THP</li>
                <li>Session - Automne 2k22</li>
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
