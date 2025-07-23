import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Services.module.css';

// CAMINHOS DE IMPORTAÇÃO CORRIGIDOS para usar o alias '@/'
import fisioterapiaImg from '@/assets/images/specialties/icons/fisioterapia.png';
import terapiaOcupacionalImg from '@/assets/images/specialties/icons/terapiaOcupacional.png';
import drenagemImg from '@/assets/images/specialties/icons/drenagem.png';
import pilatesImg from '@/assets/images/specialties/icons/pilates.png';
import rpgImg from '@/assets/images/specialties/icons/RPG.png';
import terapiaABAImg from '@/assets/images/specialties/icons/terapiaABA.png';
import odontologiaImg from '@/assets/images/specialties/icons/odontologia.png';
import terapiaManualImg from '@/assets/images/specialties/icons/terapiaManual.png';

interface ServiceItemProps {
  name: string;
  img: StaticImageData;
  href: string;
}

const servicesData: ServiceItemProps[] = [
  { name: 'Fisioterapia', img: fisioterapiaImg, href: '/servicos/fisioterapia' },
  { name: 'Terapia Ocupacional', img: terapiaOcupacionalImg, href: '/servicos/terapia-ocupacional' },
  { name: 'Drenagem', img: drenagemImg, href: '/servicos/drenagem' },
  { name: 'Pilates', img: pilatesImg, href: '/servicos/pilates' },
  { name: 'RPG', img: rpgImg, href: '/servicos/RPG' },
  { name: 'Terapia ABA', img: terapiaABAImg, href: '/servicos/terapia-aba' },
  { name: 'Odontologia', img: odontologiaImg, href: '/servicos/odontologia' },
  { name: 'Terapia Manual', img: terapiaManualImg, href: '/servicos/terapia-manual' },
];

const ServiceItem: React.FC<ServiceItemProps> = ({ name, img, href }) => (
  <a href={href} className={styles.serviceItem} target="_blank" rel="noopener noreferrer"> {/* Adicionado href, target e rel */}
    <div className={styles.serviceCircle}>
      <Image src={img} alt={name} width={80} height={80} style={{ objectFit: 'contain' }} />
    </div>
    <p className={styles.serviceTitle}>{name}</p>
  </a>
);

const Services: React.FC = () => {
  return (
    <section id="especialidades" className={styles.servicesSection}>
      <h2 className="section_title">Nossas Especialidades</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map(service => (
          <ServiceItem key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;