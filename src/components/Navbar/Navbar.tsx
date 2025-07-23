"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Importe o componente Link do Next.js
import styles from './Navbar.module.css';
import logo from '@/assets/images/logo-vitta-integrale.png';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

const Navbar: React.FC = () => {
  const [showSpecialties, setShowSpecialties] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSpecialties(true);
  };

  const handleMouseLeave = () => {
    setShowSpecialties(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Função para fechar o menu ao clicar em um link no mobile
  const handleMobileLinkClick = () => {
    setShowMobileMenu(false);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* 2. Use Link para o logo, apontando para a página inicial */}
        <Link href="/" className={styles.navbarLogo}>
          <Image src={logo} alt="Vitta Integrale Logo" height={90} width={90} />
          <span className={styles.logoTitle}>Vitta Integrale</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        {!showMobileMenu && (
          <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          <li
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* O link principal pode não levar a lugar nenhum ou a uma página de especialidades */}
            <span className={styles.navLink}>
              Especialidades <span className={styles.dropdownArrow}>&#9660;</span>
            </span>
            {showSpecialties && (
              <ul className={styles.dropdownMenu}>
                {/* 3. Substitua <a> por <Link> e ajuste os hrefs */}
                <li><Link href="/servicos/fisioterapia" className={styles.dropdownItem}>Fisioterapia</Link></li>
                <li><Link href="/servicos/drenagem" className={styles.dropdownItem}>Drenagem</Link></li>
                <li><Link href="/servicos/pilates" className={styles.dropdownItem}>Pilates</Link></li>
                {/* Adicione os outros serviços aqui com o mesmo padrão */}
                <li><Link href="/servicos/terapia-ocupacional" className={styles.dropdownItem}>Terapia Ocupacional</Link></li>
                <li><Link href="/servicos/terapia-aba" className={styles.dropdownItem}>Terapia Aba</Link></li>
                <li><Link href="/servicos/terapia-manual" className={styles.dropdownItem}>Terapia Manual</Link></li>  
                <li><Link href="/servicos/RPG" className={styles.dropdownItem}>RPG</Link></li>
                <li><Link href="/servicos/odontologia" className={styles.dropdownItem}>Odontologia</Link></li>
              </ul>
            )}
          </li>
          <li>
            {/* Links externos (como WhatsApp) continuam usando <a> */}
            <a
              href="https://wa.me/5516997308501" // Coloque seu número aqui
              className={styles.navLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco <WhatsAppIcon width={18} height={18} color="#000000" />
            </a>
          </li>
        </ul>

        {/* Mobile Sidebar Menu */}
        <div className={`${styles.mobileSidebar} ${showMobileMenu ? styles.show : ''}`}>
          <div className={styles.closeButton} onClick={toggleMobileMenu}>&times;</div>
          <ul className={styles.mobileNavMenu}>
            <li
              className={`${styles.mobileDropdown} ${showSpecialties ? styles.open : ''}`}
              onClick={() => setShowSpecialties(!showSpecialties)}
            >
              <span className={styles.mobileNavLink}>
                Especialidades <span className={styles.dropdownArrow}>&#9660;</span>
              </span>
              {showSpecialties && (
                <ul className={styles.mobileDropdownMenu}>
                  {/* 4. Faça a mesma substituição para o menu mobile */}
                  <li><Link href="/servicos/fisioterapia" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Fisioterapia</Link></li>
                  <li><Link href="/servicos/drenagem" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Drenagem</Link></li>
                  <li><Link href="/servicos/pilates" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Pilates</Link></li>
                  <li><Link href="/servicos/terapia-ocupacional" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Terapia Ocupacional</Link></li>
                  <li><Link href="/servicos/terapia-aba" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Terapia ABA</Link></li>
                  <li><Link href="/servicos/terapia-manual" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Terapia Manual</Link></li>
                  <li><Link href="/servicos/RPG" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>RPG</Link></li>
                  <li><Link href="/servicos/odontologia" className={styles.mobileDropdownItem} onClick={handleMobileLinkClick}>Odontologia</Link></li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="https://wa.me/5516997308501" // Coloque seu número aqui
                className={styles.mobileNavLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMobileLinkClick}
              >
                Fale Conosco <WhatsAppIcon width={18} height={18} color="#000000" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;