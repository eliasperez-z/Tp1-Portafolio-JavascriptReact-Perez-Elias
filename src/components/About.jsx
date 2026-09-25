import React, { useState } from 'react';

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  const toggleMostrar = () => {
    setMostrarMas(!mostrarMas);
  };

  return (
    <section id="about" className="section">
      <h2>Sobre mí</h2>
      <p>Hola, mi nombre es Elias Perez. Soy un estudiante con muchas ganas de aprender y crear cosas utiles para las personas.</p>
      
      {mostrarMas && (
        <p style={{ marginTop: '15px' }}>
          Además de programar, me gusta todo lo relacionado con la tecnología y los deportes. Mi objetivo profesional es convertirme en un desarrollador full-stack y trabajar en proyectos que impacten positivamente a los usuarios.
        </p>
      )}

      <button onClick={toggleMostrar} className="btn">
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
}

export default About;