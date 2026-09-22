import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
