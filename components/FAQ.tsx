import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "A LLC realmente me protege?",
      a: "Sim, a LLC (Limited Liability Company) é a espinha dorsal da blindagem. O método ensina exatamente como abrir e estruturar essa entidade legal nos EUA para garantir a separação e proteção do seu ativo."
    },
    {
      q: "Não tenho o valor total agora. Posso financiar?",
      a: "Absolutamente. O método foca em acessibilidade. Você aprenderá as estratégias de dolarização acelerada e o caminho para o financiamento americano."
    },
    {
      q: "Como faço a gestão do outro lado do mundo?",
      a: "O método entrega as ferramentas e os checklists para a gestão remota simplificada e critérios para selecionar administradoras confiáveis na Flórida."
    },
    {
      q: "E se o dólar subir muito?",
      a: "O risco está na inação. O método ensina a Estratégia de Dolarização Contínua, que dilui o risco do câmbio e evita que você fique esperando um 'momento perfeito'."
    },
    {
      q: "Comprar imóvel dá Green Card?",
      a: "Não. O objetivo do Método é a blindagem patrimonial e renda passiva. A questão imigratória deve ser tratada separadamente, embora o imóvel seja uma base segura."
    },
    {
      q: "Por quanto tempo terei acesso?",
      a: "Por 12 meses após a sua inscrição."
    }
  ];

  return (
    <Section className="bg-brand-dark">
      <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-brand-card border border-slate-800 rounded-lg overflow-hidden">
            <button 
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-slate-200">{faq.q}</span>
              {openIndex === index ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-slate-500" />}
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 py-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};