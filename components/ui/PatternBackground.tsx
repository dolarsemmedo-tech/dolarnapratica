import React from 'react';

export const PatternBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Técnico Sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
           backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
           backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Efeito Glow Ambiente (Profundidade) */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};