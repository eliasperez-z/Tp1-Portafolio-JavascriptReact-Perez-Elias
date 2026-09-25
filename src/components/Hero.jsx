import React from 'react';

function Hero({ profesion }) {
  return (
    <section className="section hero">
      <h2>¡Hola! Bienvenido a mi espacio.</h2>
      <p>Soy un futuro <strong className="hero-highlight">{profesion}</strong> apasionado por la tecnología.</p>
    </section>
  );
}

export default Hero;