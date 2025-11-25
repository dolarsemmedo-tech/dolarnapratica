import React from 'react';
import { Section } from './ui/Section';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-gradient-to-b from-brand-dark to-[#050f25]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-card rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative">
          
           {/* Header */}
           <div className="bg-slate-900/50 p-8 text-center border-b border-slate-800">
             <h2 className="text-2xl md:text-3xl font-bold mb-2">Método Dólar Sem Medo Premium</h2>
             <p className="text-slate-400">Pare de perder dinheiro para a instabilidade do Real!</p>
           </div>

           <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
              {/* Features */}
              <div className="space-y-4">
                 {[
                   "Método Completo (Dolarização à Gestão)",
                   "Bônus 01: Chatbot IA (R$ 197)",
                   "Bônus 02: Guia Orlando 2026 (R$ 147)",
                   "Bônus 03: Clube VIP (R$ 497)",
                   "Garantia Incondicional de 7 Dias",
                   "Suporte e Bônus Garantidos"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                       <Check size={12} className="text-emerald-400" />
                     </div>
                     <span className="text-slate-300 text-sm md:text-base">{item}</span>
                   </div>
                 ))}
              </div>

              {/* Price Card */}
              <div className="bg-[#020617] p-8 rounded-2xl border border-slate-800 text-center relative shadow-inner">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                   Oferta Limitada
                 </div>
                 <p className="text-slate-500 text-sm line-through mb-2">De R$ 297,00</p>
                 <p className="text-emerald-400 text-sm font-semibold mb-1">Por apenas:</p>
                 <div className="flex justify-center items-baseline mb-2">
                    <span className="text-xl text-slate-400 mr-1">R$</span>
                    <span className="text-5xl font-bold text-white">97,00</span>
                 </div>
                 <p className="text-slate-400 text-sm mb-6">ou 12x de R$ 9,70</p>
                 
                 <Button fullWidth className="mb-4">
                   SIM, QUERO GARANTIR
                 </Button>

                 <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                   <CreditCard size={14} />
                   <span>Pagamento 100% Seguro</span>
                 </div>
              </div>
           </div>

           {/* Guarantee Footer */}
           <div className="bg-slate-900/80 p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left border-t border-slate-800">
              <ShieldCheck className="text-emerald-500 h-10 w-10 shrink-0" />
              <div>
                <h4 className="font-bold text-white">Garantia Incondicional de 7 Dias</h4>
                <p className="text-slate-400 text-xs md:text-sm">Se você não se surpreender, basta pedir o reembolso com um clique. O único risco é não entrar e perder a condição especial.</p>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};