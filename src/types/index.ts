import { StaticImageData } from "next/image";

export interface Specialist {
  name: string;
  specialty: string;
  shortDescription: string;
  img: StaticImageData;
  fullDescription: string;
  callToWhatsapp: string;
}

export interface AccordionItemData {
  title: string;
  content: string;
}

export interface ServiceData {
  title: string;
  description: string;
  heroImage: StaticImageData;
  accordionTitle: string;
  accordionItems: AccordionItemData[];
  specialistsTitle: string;
  specialists: Specialist[];
  ctaText: string;
}

export interface Services {
  [key: string]: ServiceData;
}