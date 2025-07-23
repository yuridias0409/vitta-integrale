import React from 'react';
import ServicePageClient from './ServicePageClient'; // Importa o novo componente de cliente

// Tipagem para os parâmetros que o Next.js passa para a página
interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

// Este é o "Server Component". Ele é simples e roda no servidor.
const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  // 1. Lê o parâmetro da URL no servidor
  const { serviceName } = params;

  // 2. Renderiza o componente de cliente, passando o parâmetro como uma string normal
  return <ServicePageClient serviceName={serviceName} />;
};

export default ServicePage;