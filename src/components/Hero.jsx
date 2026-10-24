function Hero({ profesion }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#1a1a1a', borderRadius: '10px' }}>
      <h2>¡Hola! Bienvenido a mi espacio.</h2>
      <p>Soy un futuro <strong style={{ color: '#646cff' }}>{profesion}</strong> apasionado por la tecnologia.</p>
    </div>
  );
}
export default Hero;