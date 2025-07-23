import React from 'react';
import styles from './CallToAction.module.css';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Cuidado integral para a sua saúde e bem-estar!</h2>
        <a href="https://wa.me/5516997308501?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={24} height={24} />
          <span>Fale com a gente no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;