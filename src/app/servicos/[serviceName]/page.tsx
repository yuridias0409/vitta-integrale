// src/app/servicos/[serviceName]/page.tsx
import ServicePageClient from './ServicePageClient';

// Define the interface for your params
interface ServicePageParams {
  serviceName: string;
}

// *** IMPORTANT CHANGE HERE ***
// Update PageProps to expect 'params' as a Promise
// This aligns with the generated types from Next.js
interface PageProps {
  params: Promise<ServicePageParams>; // <-- Changed to Promise<ServicePageParams>
}

// Make the Page component async
export default async function ServicePage({ params }: PageProps) {
  // Even though params is typed as a Promise, Next.js resolves it for you
  // when it passes it to the component. So, you can still access it directly.
  // The 'await' below is for clarity and good practice,
  // but Next.js often handles this behind the scenes.
  const resolvedParams = await params;

  return <ServicePageClient serviceName={resolvedParams.serviceName} />;
}

export async function generateStaticParams() {
  const services = [
    { slug: 'fisioterapia' },
    { slug: 'terapia-ocupacional' },
    { slug: 'drenagem' },
    { slug: 'pilates' },
    { slug: 'RPG' },
    { slug: 'terapia-manual' },
    { slug: 'terapia-aba' },
    { slug: 'odontologia' },
  ];

  return services.map((service) => ({
    serviceName: service.slug,
  }));
}