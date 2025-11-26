import React from 'react';
import { Section } from './ui/Section';
import { Map, DollarSign, Shield, Home, Key } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    {
      icon: <Map className="text-brand-dark" size={20} />,
      title: "Visão Geral",
      desc: "Mapa 360° da Jornada para abandonar a confusão."
    },
    {
      icon: <DollarSign className="text-brand-dark" size={20} />,
      title: "Dolarização",
      desc: "Primeira conversão de capital segura para dólar."
    },
    {
      icon: <Shield className="text-brand-dark" size={20} />,
      title: "Blindagem (LLC)",
      desc: "Checklists para abrir sua estrutura jurídica."
    },
    {
      icon: <Home className="text-brand-dark" size={20} />,
      title: "Seleção",
      desc: "Critérios para ativos de alta rentabilidade."
    },
    {
      icon: <Key className="text-brand-dark" size={20} />,
      title: "Aquisição & Renda",
      desc: "Compra e gestão remota para gerar aluguéis."
    }
  ];

  return (
    <Section 
      className="bg-[#0B1221]"
      background={
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Ambient Glow for Volume */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-[#0B1221]/0 to-[#0B1221]/0 z-0"></div>

            {/* Dotted World Map Pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen"
                style={{
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_grey.svg")',
                    backgroundSize: '110%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'invert(1) brightness(0.8)' // White dots on dark bg
                }}
            />
            
            {/* Fine Grid Texture Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.05] z-0" 
                style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />
        </div>
      }
    >
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona?</h2>
        <p className="text-slate-400">A forma mais fácil e rápida para conquistar a Blindagem.</p>
      </div>

      <div className="relative max-w-2xl mx-auto z-10">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Icon Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#0B1221] z-10 shadow-lg shadow-emerald-500/20">
                {step.icon}
              </div>

              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-0 md:px-10">
                 <div className={`bg-brand-card p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors shadow-lg backdrop-blur-sm ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
