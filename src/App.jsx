import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Pasamos la información por props */}
      <Header nombre="Elias Perez" />
      <Hero profesion="Desarrollador Frontend" />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;