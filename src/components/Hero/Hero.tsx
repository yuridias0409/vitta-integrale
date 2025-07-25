import React from 'react';
import styles from './Hero.module.css';
import Image, { StaticImageData } from 'next/image';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  blue?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ blue }) => (
  <a href="https://wa.me/5516997308501" className={`${styles.btnWhatsapp} ${blue ? styles.blue : ''}`} target="_blank" rel="noopener noreferrer">
    <WhatsAppIcon />
    Agende sua Avaliação
  </a>
);

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
          <WhatsAppButton />
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