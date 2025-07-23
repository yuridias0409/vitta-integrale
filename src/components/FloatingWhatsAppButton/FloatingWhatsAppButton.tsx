import React from 'react';
import styles from './FloatingWhatsAppButton.module.css';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a href="https://wa.me/5516997308501?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços." className={styles.floatingButton} target="_blank" rel="noopener noreferrer" aria-label="Fale com a gente no WhatsApp">
      <WhatsAppIcon width={32} height={32} />
    </a>
  );
};

export default FloatingWhatsAppButton;