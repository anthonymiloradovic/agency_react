import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Works = () => {
    return (

        <div className="works">
            <Navigation/>
            <h2>  Au fil des années, nous avons pu accompagner les meilleurs.</h2>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
</p>
            <ul>
                <li>
                    <Link to="/works/platon-study-case">Etude de cas pour Platon</Link>
                </li>
                <li>
                    <Link to="/works/solane-study-case">Etude de cas pour Solane</Link>
                </li>
                <li>
                    <Link to="/works/sedal-study-case">Etude de cas pour Sedal</Link>
                </li>
                <li>
                    <Link to="/works/nou-study-case">Etude de cas pour Nou</Link>
                </li>
            </ul>
        </div>
    );
};

export default Works;