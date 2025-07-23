import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import headerBackground from '@/assets/images/header-background.jpeg';
import headerLogo from '@/assets/images/logo-vitta-integrale.png';

const Header: React.FC = () => {
  return (
    <header id="home" className={styles.header}>
      <Image
        src={headerBackground}
        alt="Fundo decorativo Vitta Integrale"
        fill
        quality={100}
        priority
        className={styles.headerBackground}
      />
      <div className={styles.logoContainer}>
        <Image
          src={headerLogo}
          alt="Vitta Integrale Logo Principal"
          width={500}
          height={200}
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
    </header>
  );
};

export default Header;