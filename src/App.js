import './App.css';
import React from 'react';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ProjectList from './components/projectlist/ProjectList';

function App() {
  return (
    <>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
