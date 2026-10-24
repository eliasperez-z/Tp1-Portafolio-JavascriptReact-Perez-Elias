function SkillCard({ tecnologia }) {
  return (
    <div className="card" style={{ display: 'inline-block', margin: '5px', padding: '10px' }}>
      <strong style={{ color: '#646cff' }}>{tecnologia}</strong>
    </div>
  );
}
export default SkillCard;