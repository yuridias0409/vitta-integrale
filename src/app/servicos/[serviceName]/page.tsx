import React from 'react';
import ServicePageClient from './ServicePageClient';
interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

const ServicePage = ({ params }: ServicePageProps) => {
  const { serviceName } = params;
  return <ServicePageClient serviceName={serviceName} />;
};

export default ServicePage;