import ServicePageClient from './ServicePageClient';
interface ServicePageProps {
  params: {
    serviceName: string;
  };
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { serviceName } = params;

  return <ServicePageClient serviceName={serviceName} />;
};

export default ServicePage;