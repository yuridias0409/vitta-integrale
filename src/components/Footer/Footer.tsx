import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import footerLogo from '@/assets/images/footer-logo.png';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoArea}>
          <Image src={footerLogo} alt="Vitta Integrale Logo Branca" width={200} height={180} style={{ objectFit: 'contain' }}/>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.contentArea}>
          <div className={styles.footerColumn}>
            <h3>Onde Estamos</h3>
            <p>R. 7 de setembro, 2457 - Centro,<br />São Carlos - SP, 13560-180</p>
            <a href="https://maps.app.goo.gl/9ZpP4h2L3X7bSjBw9" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Ver no mapa</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contato</h3>
            <p>Telefone: <a href="tel:+5516997308501">(16) 99730-8501</a></p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/vittaintegrale/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon color="#fff"/>
                <span>@vittaintegrale</span>
              </a>
            </div>
          </div>
          <div className={styles.footerColumn}>
             <h3>Localização</h3>
            <iframe
              className={styles.footerMap}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.57706557741!2d-47.889042224805955!3d-22.015875906639256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876dc62b93741%3A0xc5818efcbf74c5e!2sVitta%20Integrale%20Cl%C3%ADnica%20de%20Fisioterapia!5e1!3m2!1spt-BR!2sbr!4v1753290079495!5m2!1spt-BR!2sbr"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Vitta Integrale. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

