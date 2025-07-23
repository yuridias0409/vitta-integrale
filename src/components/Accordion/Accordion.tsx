"use client";

import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionItemData } from '../../types';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
      <button className={styles.accordionHeader} onClick={onClick}>
        {title}
        <span className={styles.accordionIcon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div 
        className={styles.accordionContent}
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className={styles.accordionContentInner}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemData[];
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, title }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.specialtiesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.accordion}>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;