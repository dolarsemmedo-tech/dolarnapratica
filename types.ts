import { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: ReactNode;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface PricingCardProps {
  price: string;
  installments: string;
  features: string[];
}