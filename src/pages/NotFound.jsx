import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
          <h1>Erreur 404</h1>
          <NavLink to="/">
            <button>Retour à l'accueil <i className='fas fa-home'></i></button>
          </NavLink>
        </div>
    );
};

export default NotFound;
