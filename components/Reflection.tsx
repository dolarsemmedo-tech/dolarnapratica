import React from 'react';
import { Section } from './ui/Section';
import { HelpCircle, Quote } from 'lucide-react';
import { Button } from './ui/Button';

export const Reflection: React.FC = () => {
  return (
    <Section className="bg-brand-dark border-t border-slate-900">
      <div className="text-center mb-12">
        <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase">Reflexão</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Você já passou por algo assim?</h2>
        <p className="text-slate-400">Estas são algumas questões que sempre recebemos por aqui.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {[
          "Se acontecer uma crise séria no Brasil, minha família terá que recomeçar do zero?",
          "Sente medo constante de que a instabilidade brasileira roube seu esforço?",
          "O medo de perder dinheiro por não conhecer a burocracia americana te paralisa?",
          "Sabe que precisa sair do Real, mas não tem um passo a passo claro?"
        ].map((question, index) => (
          <div key={index} className="bg-brand-card p-6 rounded-xl border border-slate-800 flex gap-4 items-start hover:border-slate-700 transition-colors">
            <HelpCircle className="text-emerald-500 shrink-0 mt-1" size={24} />
            <p className="text-slate-300 font-medium">{question}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative px-6">
        <Quote className="w-16 h-16 text-emerald-500/10 absolute -top-10 left-0 md:-left-8" />
        
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light italic">
            "Eu sei exatamente como é essa sensação de ser um <span className="text-white font-medium not-italic">refém da economia do seu próprio país</span>. 
            Essa ansiedade não é frescura, é um sinal de que o seu esforço está em risco. <br className="hidden md:block" />
            Você está a poucos minutos de descobrir o roteiro validado que transforma a preocupação noturna em <span className="text-emerald-400 font-medium not-italic">Paz de Espírito Global</span>."
          </p>
          
          <div className="flex justify-center">
              <Button>Sim, quero resolver isso agora</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};