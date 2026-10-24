import SkillCard from '../components/SkillCard';

function Skills() {
  const habilidades = ["JavaScript", "React", "HTML", "CSS", "Git", "GitHub"];

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Mis Habilidades Tecnológicas</h2>
      <div>
        {habilidades.map((habilidad, index) => (
          <SkillCard key={index} tecnologia={habilidad} />
        ))}
      </div>
    </div>
  );
}
export default Skills;