"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from '@/assets/images/logo-vitta-integrale.png';
import footerLogo from '@/assets/images/footer-logo.png';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) {
      setDropdownOpen(false);
    }
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeMenuAndNavigate = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const navbarClasses = `${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.menuOpen : ''}`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className={styles.navbarContainer}>
          {!isMobileMenuOpen && (
            <Link href="/" className={styles.navbarLogo} onClick={closeMenuAndNavigate}>
              <Image src={logo} alt="Vitta Integrale Logo" height={110} width={110} priority />
              <span className={styles.logoTitle}>Vitta Integrale</span>
            </Link>
          )}

          <div className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

          <ul className={styles.navMenu}>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>
                Especialidades <span className={styles.arrow}>&#9662;</span>
              </span>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/servicos/fisioterapia" className={styles.dropdownItem}>Fisioterapia</Link></li>
                <li><Link href="/servicos/drenagem" className={styles.dropdownItem}>Drenagem</Link></li>
                <li><Link href="/servicos/pilates" className={styles.dropdownItem}>Pilates</Link></li>
                <li><Link href="/servicos/terapia-ocupacional" className={styles.dropdownItem}>Terapia Ocupacional</Link></li>
                <li><Link href="/servicos/terapia-aba" className={styles.dropdownItem}>Terapia Aba</Link></li>
                <li><Link href="/servicos/terapia-manual" className={styles.dropdownItem}>Terapia Manual</Link></li>
                <li><Link href="/servicos/RPG" className={styles.dropdownItem}>RPG</Link></li>
                <li><Link href="/servicos/odontologia" className={styles.dropdownItem}>Odontologia</Link></li>
              </ul>
            </li>
            <li>
              <a
                href="https://wa.me/5516997308501"
                className={styles.navButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco <WhatsAppIcon width={18} height={18} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.mobileMenuHeader}>
            <Image src={footerLogo} alt="Vitta Integrale Logo" width={150} height={150} className={styles.mobileMenuLogo} priority />
          </div>
          <ul className={styles.mobileNavMenu}>
            <li className={`${styles.mobileDropdown} ${isDropdownOpen ? styles.open : ''}`}>
              <div className={styles.mobileNavLink} onClick={toggleDropdown}>
                Especialidades <span className={styles.arrow}>&#9662;</span>
              </div>
              <ul className={styles.mobileDropdownMenu}>
                <li><Link href="/servicos/fisioterapia" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Fisioterapia</Link></li>
                <li><Link href="/servicos/drenagem" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Drenagem</Link></li>
                <li><Link href="/servicos/pilates" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Pilates</Link></li>
                <li><Link href="/servicos/terapia-ocupacional" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Terapia Ocupacional</Link></li>
                <li><Link href="/servicos/terapia-aba" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Terapia ABA</Link></li>
                <li><Link href="/servicos/terapia-manual" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Terapia Manual</Link></li>
                <li><Link href="/servicos/RPG" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>RPG</Link></li>
                <li><Link href="/servicos/odontologia" className={styles.mobileDropdownItem} onClick={closeMenuAndNavigate}>Odontologia</Link></li>
              </ul>
            </li>
            <li>
              <a
                href="https://wa.me/5516997308501"
                className={styles.mobileNavButton}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenuAndNavigate}
              >
                Fale Conosco <WhatsAppIcon width={22} height={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;