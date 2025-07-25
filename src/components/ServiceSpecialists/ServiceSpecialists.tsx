'use client'; // Essencial para componentes com estado e interatividade

import React, { useState } from 'react';
import styles from './ServiceSpecialists.module.css';
import { Specialist } from '../../types';
import Image from 'next/image'; // 1. Importe o componente Image do Next.js

interface SpecialistModalProps {
  specialist: Specialist | null;
  onClose: () => void;
}

const SpecialistModal: React.FC<SpecialistModalProps> = ({ specialist, onClose }) => {
  if (!specialist) return null;

  const { name, specialty, img, fullDescription, callToWhatsapp } = specialist;
  const encodedMessage = encodeURIComponent(callToWhatsapp);
  let whatsappLink = `https://wa.me/5516997308501?text=${encodedMessage}`;
  
  if(name == 'Dr. Lucas'){
    whatsappLink = `https://wa.me/5516997566224?text=${encodedMessage}`;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.modalClose} onClick={onClose}>×</span>
        {/* 2. Use o componente Image aqui também para a imagem do modal */}
        <Image 
          src={img} 
          alt={`Foto de ${name}`} 
          className={styles.modalImage} 
          width={200} // É uma boa prática definir width e height
          height={200}
        />
        <h2 className={styles.modalName}>{name}</h2>
        <h3 className={styles.modalSpecialty}>{specialty}</h3>
        <p className={styles.modalDescription}>{fullDescription}</p>
        <a href={whatsappLink} className={`${styles.btnWhatsapp} ${styles.blue}`} target="_blank" rel="noopener noreferrer">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 24 24"><path d="M20.52 3.48A11.947 11.947 0 0012.004 0C5.373 0 0 5.373 0 12c0 2.113.553 4.096 1.597 5.873L0 24l6.293-1.636A11.93 11.93 0 0012.004 24c6.627 0 12-5.373 12-12 0-3.192-1.243-6.188-3.48-8.52zM12 21.5a9.43 9.43 0 01-4.843-1.312l-.347-.207-3.735.971.998-3.641-.226-.375A9.446 9.446 0 012.5 12c0-5.238 4.262-9.5 9.5-9.5S21.5 6.762 21.5 12 17.238 21.5 12 21.5zm5.262-7.49c-.29-.145-1.713-.844-1.98-.94-.266-.098-.46-.145-.654.145s-.75.938-.922 1.13c-.17.19-.34.215-.63.07-1.713-.844-2.836-1.504-3.965-3.42-.3-.52.3-.482.844-1.605.094-.19.047-.355-.025-.5-.072-.145-.654-1.577-.896-2.16-.237-.57-.48-.492-.66-.5-.17-.008-.36-.01-.55-.01s-.5.07-.76.355c-.26.285-1 1.008-1 2.465s1.027 2.86 1.17 3.06c.145.19 2.03 3.16 4.922 4.432.688.297 1.224.475 1.643.605.69.22 1.316.19 1.812.116.553-.082 1.713-.7 1.957-1.375.242-.676.242-1.256.17-1.375-.07-.12-.26-.19-.55-.33z"/></svg>
            Fazer um agendamento
        </a>
      </div>
    </div>
  );
};

interface ServiceSpecialistsProps {
  specialists: Specialist[];
  title: string;
}

const ServiceSpecialists: React.FC<ServiceSpecialistsProps> = ({ specialists, title }) => {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  const openModal = (specialist: Specialist) => {
    setSelectedSpecialist(specialist);
  };

  const closeModal = () => {
    setSelectedSpecialist(null);
  };

  return (
    <section className={styles.specialistsSectionDetailed}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.specialistsGrid}>
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className={styles.professionalCardClickable}
              onClick={() => openModal(specialist)}
            >
              <div className={styles.professionalImage}>
                {/* 3. Use o componente Image aqui para a foto do especialista no card */}
                <Image 
                  src={specialist.img} 
                  alt={specialist.name}
                  width={180}
                  height={180}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 className={styles.professionalName}>{specialist.name}</h3>
              <p className={styles.professionalDescriptionShort}>{specialist.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <SpecialistModal specialist={selectedSpecialist} onClose={closeModal} />
    </section>
  );
};

export default ServiceSpecialists;