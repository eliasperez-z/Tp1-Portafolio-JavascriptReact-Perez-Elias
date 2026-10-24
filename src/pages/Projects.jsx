import ProjectCard from '../components/ProjectCard';

function Projects() {
  const proyectos = [
    { id: 1, nombre: "Calculadora Web", descripcion: "Una calculadora hecha con HTML,CSS y JS puro." },
    { id: 2, nombre: "Portfolio Multipágina", descripcion: "Este portfolio creado con React Router DOM." }
  ];

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Mis Proyectos</h2>
      <div>
        {proyectos.map((proyecto) => (
          <ProjectCard 
            key={proyecto.id} 
            nombre={proyecto.nombre} 
            descripcion={proyecto.descripcion}  
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;