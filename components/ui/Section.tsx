import React from 'react';
import { SectionProps } from '../../types';

export const Section: React.FC<SectionProps> = ({ id, className = '', children, background }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
      {background && <div className="absolute inset-0 z-0 pointer-events-none">{background}</div>}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {children}
      </div>
    </section>
  );
};