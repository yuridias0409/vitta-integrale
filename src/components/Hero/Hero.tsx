import React from 'react';
import styles from './Hero.module.css';
import Image, { StaticImageData } from 'next/image';

interface WhatsAppButtonProps {
  blue?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ blue }) => (
  <a href="https://wa.me/5516997308501" className={`${styles.btnWhatsapp} ${blue ? styles.blue : ''}`} target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24"><path d="M20.52 3.48A11.947 11.947 0 0012.004 0C5.373 0 0 5.373 0 12c0 2.113.553 4.096 1.597 5.873L0 24l6.293-1.636A11.93 0 0012.004 24c6.627 0 12-5.373 12-12 0-3.192-1.243-6.188-3.48-8.52zM12 21.5a9.43 9.43 0 01-4.843-1.312l-.347-.207-3.735.971.998-3.641-.226-.375A9.446 9.446 0 012.5 12c0-5.238 4.262-9.5 9.5-9.5S21.5 6.762 21.5 12 17.238 21.5 12 21.5zm5.262-7.49c-.29-.145-1.713-.844-1.98-.94-.266-.098-.46-.145-.654.145s-.75.938-.922 1.13c-.17.19-.34.215-.63.07-1.713-.844-2.836-1.504-3.965-3.42-.3-.52.3-.482.844-1.605.094-.19.047-.355-.025-.5-.072-.145-.654-1.577-.896-2.16-.237-.57-.48-.492-.66-.5-.17-.008-.36-.01-.55-.01s-.5.07-.76.355c-.26.285-1 1.008-1 2.465s1.027 2.86 1.17 3.06c.145.19 2.03 3.16 4.922 4.432.688.297 1.224.475 1.643.605.69.22 1.316.19 1.812.116.553-.082 1.713-.7 1.957-1.375.242-.676.242-1.256.17-1.375-.07-.12-.26-.19-.55-.33z"></path></svg>
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