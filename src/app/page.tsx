'use client';

import React from 'react';

// Importa os componentes .tsx
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import AboutUs from '../components/AboutUs/AboutUs';
import Professionals from '../components/Professionals/Professionals';
import Footer from '../components/Footer/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton/FloatingWhatsAppButton';
import CallToAction from '../components/CallToAction/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <CallToAction />
        <Services />
        <AboutUs />
        <Professionals />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default HomePage;
