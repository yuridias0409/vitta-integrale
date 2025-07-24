import React from 'react';
import ServicePageClient from './ServicePageClient'; // Importa o novo componente de cliente

// Tipagem para os parâmetros que o Next.js passa para a página
interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

// Este é o "Server Component". Ele é simples e roda no servidor.
// No Next.js App Router, as props para um Page Component (como params) são diretas, não Promises.
const ServicePage = ({ params }: ServicePageProps) => { // Removed React.FC<ServicePageProps>
  // 1. Lê o parâmetro da URL no servidor
  const { serviceName } = params;

  // 2. Renderiza o componente de cliente, passando o parâmetro como uma string normal
  return <ServicePageClient serviceName={serviceName} />;
};

export default ServicePage;