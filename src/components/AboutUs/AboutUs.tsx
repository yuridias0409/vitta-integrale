import React from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';
import aboutImage from '@/assets/images/professionals/about-us-image.jpeg';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.imageWrapper}>
          <Image src={aboutImage} alt="Equipe Vitta Integrale" className={styles.aboutImage} fill />
        </div>
        <div className={styles.contentWrapper}>
          <h2 className="section_title" style={{textAlign: 'left', marginBottom: '20px'}}>Nossa História</h2>
          <p>Nossa história, que começou com a La Bella Fisioterapia, evoluiu para um propósito maior: oferecer um cuidado completo e integrado para você e sua família. Hoje, somos a <strong>VITTA INTEGRALE</strong>, uma clínica multidisciplinar que une excelência e atenção em um só lugar.</p>
          <ul className={styles.featuresList}>
            <li>Fisioterapia Geral</li>
            <li>Terapia Ocupacional</li>
            <li>Fisioterapia Pélvica</li>
            <li>Quiropraxia</li>
            <li>Fisioterapia Pediátrica</li>
            <li>RPG e Pilates</li>
            <li>Fisioterapia Cardiorrespiratória</li>
            <li>Odontologia</li>
            <li>Fisioterapia Neurológica</li>
            <li>Terapia ABA</li>
          </ul>
          <a href="https://wa.me/5516997308501?text=Olá!%20Gostaria%20de%20conhecer%20a%20clínica." className={styles.aboutButton} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={22} height={22} />
            <span>Venha nos conhecer!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;