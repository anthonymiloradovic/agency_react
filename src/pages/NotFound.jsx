import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div>
          <h1>Erreur 404</h1>
          <NavLink to="/">
            <button>Retour à l'accueil <i className='fas fa-home'></i></button>
          </NavLink>
          <Footer/></div>
    );
};

export default NotFound;
