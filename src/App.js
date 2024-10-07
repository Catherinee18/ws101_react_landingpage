import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Technologies />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
