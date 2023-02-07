import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
    return (
       
        <div>
            <Navigation/>
            <div className="home">
        <h1>Confiez vos rêves à des experts du Web</h1>
        <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
  <Footer/></div>
  </div>
        
    );
};

export default Home;