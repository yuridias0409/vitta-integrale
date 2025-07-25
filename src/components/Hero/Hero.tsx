import React from 'react';
import styles from './Hero.module.css';
import Image, { StaticImageData } from 'next/image';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  blue?: boolean;
  title?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ blue, title }) => {
  const whatsappNumber = title === 'Odontologia Integrada' 
    ? '5516997566224' 
    : '5516997308501';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={whatsappLink} className={`${styles.btnWhatsapp} ${blue ? styles.blue : ''}`} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      Agende sua Avaliação
    </a>
  );
};

interface HeroProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section className={styles.serviceHeroSection}>
      <div className={styles.serviceHeroContainer}>
        <div className={styles.serviceHeroContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <WhatsAppButton title={title} />
        </div>
        <div className={styles.serviceHeroImage}>
          <Image
            src={image}
            alt={`Sessão de ${title} na Vitta Integrale`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;