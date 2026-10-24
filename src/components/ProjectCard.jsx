import { useState } from 'react';

function ProjectCard({ nombre, descripcion, enlace }) {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div className="card">
      <h3 style={{ color: 'white' }}>{nombre}</h3>
      {mostrarMas && <p>{descripcion}</p>}
      <button className="btn" onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ocultar detalles' : 'Ver detalles'}
      </button>
      <br /><br />
    </div>
  );
}
export default ProjectCard;