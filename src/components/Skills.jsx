import React from 'react';

function Skills() {
  const habilidades = ["JavaScript", "React", "HTML", "CSS", "Git"];

  return (
    <section id="skills" className="section">
      <h2>Mis Habilidades Tecnológicas</h2>
      <ul className="skills-list">
        {habilidades.map((habilidad, index) => (
          <li key={index} className="skill-tag">{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;