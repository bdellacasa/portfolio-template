import React from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';

const Index = () => {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Index;