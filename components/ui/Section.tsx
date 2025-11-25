import React from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {children}
      </div>
    </section>
  );
};