import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './Professionals.module.css';

import erikaImg from '@/assets/images/professionals/erika.png';
import karinaImg from '@/assets/images/professionals/karina.png';
import mirellaImg from '@/assets/images/professionals/mirella.png';
import elaineImg from '@/assets/images/professionals/elaine.png';
import lucasImg from '@/assets/images/professionals/lucas.png';
import eduardaImg from '@/assets/images/professionals/eduarda.png';

interface ProfessionalCardProps {
  name: string;
  description: string;
  img: StaticImageData;
}

const professionalsData: ProfessionalCardProps[] = [
  { name: 'Érika Shirley', description: 'Fisioterapeuta', img: erikaImg },
  { name: 'Karina', description: 'Fisioterapeuta', img: karinaImg },
  { name: 'Elaine', description: 'Fisioterapeuta', img: elaineImg },
  { name: 'Mirella', description: 'Terapeuta Ocupacional', img: mirellaImg },
  { name: 'Lucas', description: 'Cirurgião Dentista', img: lucasImg },
  { name: 'Eduarda', description: 'Atendente', img: eduardaImg }
];

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ name, description, img }) => (
  <div className={styles.professionalCard}>
    <div className={styles.professionalImageWrapper}>
      <Image src={img} alt={name} fill style={{ objectFit: 'cover' }} />
    </div>
    <h3 className={styles.professionalName}>{name}</h3>
    <p className={styles.professionalDescription}>{description}</p>
  </div>
);

const Professionals: React.FC = () => {
  return (
    <section className={styles.professionalsSection}>
      <h2 className="section_title">Nossos Profissionais</h2>
      <div className={styles.professionalsGrid}>
        {professionalsData.map(professional => (
          <ProfessionalCard key={professional.name} {...professional} />
        ))}
      </div>
    </section>
  );
};

export default Professionals;