'use client';

import React from 'react';
import { useServiceData } from '../../../hooks/useServiceData';

import Navbar from '../../../components/Navbar/Navbar';
import Hero from '../../../components/Hero/Hero';
import Accordion from '../../../components/Accordion/Accordion';
import ServiceSpecialists from '../../../components/ServiceSpecialists/ServiceSpecialists';
import CallToAction from '../../../components/CallToAction/CallToAction';
import Footer from '../../../components/Footer/Footer';
import FloatingWhatsAppButton from '../../../components/FloatingWhatsAppButton/FloatingWhatsAppButton';

interface ServicePageClientProps {
  serviceName: string;
}

const ServicePageClient: React.FC<ServicePageClientProps> = ({ serviceName }) => {
  const { data, loading } = useServiceData(serviceName);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Serviço não encontrado.</div>;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero
          title={data.title}
          description={data.description}
          image={data.heroImage}
        />
        <Accordion
          title={data.accordionTitle}
          items={data.accordionItems}
        />
        <ServiceSpecialists
          title={data.specialistsTitle}
          specialists={data.specialists}
        />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
};

export default ServicePageClient;