import React from 'react';
import { Section } from './ui/Section';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  const withoutMethod = [
    "Preocupação noturna com a instabilidade do Real.",
    "Paralisia da Confusão.",
    "Achar que precisa ser milionário.",
    "Patrimônio vulnerável a qualquer litígio.",
    "Perder a oportunidade do dólar agora."
  ];

  const withMethod = [
    "Paz de Espírito Global com patrimônio blindado.",
    "Roteiro de Ação Sequencial (primeiro passo em 48h).",
    "Estratégia de Alavancagem para começar com Reais.",
    "Blindagem Jurídica Sólida (LLC) nos EUA.",
    "Renda Recorrente em Dólar."
  ];

  return (
    <Section className="bg-brand-dark border-y border-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Veja a diferença</h2>
        <p className="text-slate-400 text-lg">Comece hoje a usar nosso método e acelere seus resultados</p>
      </div>

      <div className="max-w-5xl mx-auto bg-[#0B1221] rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row">
        
        {/* Recommended Badge */}
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-bl-xl z-20 uppercase tracking-wider shadow-lg">
          Recomendado
        </div>

        {/* Left Column - Sem o Método */}
        <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-800">
          <h3 className="text-red-500 text-2xl font-bold mb-8">Sem o Método</h3>
          <ul className="space-y-6">
            {withoutMethod.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <X className="text-red-900 shrink-0 mt-1" size={20} />
                <span className="text-slate-500 font-medium text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Com o Método */}
        <div className="flex-1 p-8 md:p-12 relative bg-slate-900/20">
          <h3 className="text-emerald-500 text-2xl font-bold mb-8">Com o Método</h3>
           <ul className="space-y-6">
            {withMethod.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <Check className="text-emerald-500 shrink-0 mt-1" size={20} />
                <span className="text-white font-bold text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto px-4">
         <p className="text-slate-300 mb-6 text-lg leading-relaxed">
            Não perca mais tempo calculando o Custo da Oportunidade Perdida! A única forma de parar de ser refém da instabilidade brasileira é agir agora.
         </p>
         <button 
            className="text-blue-500 hover:text-blue-400 font-bold text-lg inline-flex items-center gap-2 transition-colors group"
            onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
            }}
         >
            Sim, quero resolver isso agora <span className="group-hover:translate-x-1 transition-transform">→</span>
         </button>
      </div>
    </Section>
  );
};
