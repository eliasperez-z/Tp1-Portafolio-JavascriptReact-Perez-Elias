import React from 'react';

function Header({ nombre }) {
  return (
    <header className="header">
      <h1>Portafolio de Elias</h1>
      <nav className="nav-links">
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
      </nav>
    </header>
  );
}

export default Header;