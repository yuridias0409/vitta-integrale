export interface Specialist {
  name: string;
  specialty: string;
  shortDescription: string;
  img: string;
  fullDescription: string;
}

export interface AccordionItemData {
  title: string;
  content: string;
}

export interface ServiceData {
  title: string;
  description: string;
  heroImage: string;
  accordionTitle: string;
  accordionItems: AccordionItemData[];
  specialistsTitle: string;
  specialists: Specialist[];
  ctaText: string;
}

export interface Services {
  [key: string]: ServiceData;
}