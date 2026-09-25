import React from 'react';

function Projects() {
  const proyectos = [
    { id: 1, titulo: "Calculadora Web", descripcion: "Una calculadora hecha con HTML, CSS y JS puro." },
    { id: 2, titulo: "Este Portfolio", descripcion: "Mi primer proyecto en React utilizando Vite." }
  ];

  return (
    <section id="projects" className="section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;