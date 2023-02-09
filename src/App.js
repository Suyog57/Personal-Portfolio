import './App.css';
import React from 'react';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ProjectList from './components/projectlist/ProjectList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
