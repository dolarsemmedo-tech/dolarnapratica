import React from 'react';
import { Hero } from './components/Hero';
import { Reflection } from './components/Reflection';
import { Timeline } from './components/Timeline';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Button } from './components/ui/Button';
import { Section } from './components/ui/Section';
import { PatternBackground } from './components/ui/PatternBackground';
import { AlertTriangle, CheckCircle, Lock, User, Instagram, Mail, Phone, XCircle, Layout, BookOpen, Users, Bot, ShieldCheck, Map, Globe, DollarSign, Quote } from 'lucide-react';

function App() {
  return (
    <div className="font-sans bg-brand-dark text-brand-text selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 1. Alert Bar */}
      <div className="bg-red-700 text-white text-xs md:text-sm font-semibold text-center py-2 px-4 uppercase tracking-wide">
        A forma mais fácil para Blindar Seu Patrimônio da Crise e ter Renda em Dólar!
      </div>

      {/* 2. Hero */}
      <Hero />

      {/* 3. Reflection */}
      <Section className="bg-brand-dark border-t border-slate-900" background={<PatternBackground />}>
        <Reflection />
      </Section>

      {/* 4. Errors (Common Mistakes) */}
      <Section 
        className="bg-[#0B1221]"
        background={
          <div 
            className="absolute inset-0 w-full h-full opacity-[0.05] grayscale mix-blend-soft-light bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop")',
            }}
          >
            <div className="absolute inset-0 bg-brand-dark/20"></div>
          </div>
        }
      >
        <div className="text-center mb-12 relative z-10">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Cuidado</span>
          <h2 className="text-3xl font-bold mt-2">Erros que atrapalham seu resultado:</h2>
          <p className="text-slate-400 mt-2">Veja adiante como resolver tudo isso de forma definitiva!</p>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto relative z-10">
          {[
            "Não ter um roteiro de ação sequencial para sair da inércia.",
            "Não ter a certeza da estrutura jurídica (LLC) que blinda seu patrimônio.",
            "Fazer apenas investimentos em ETFs/Ações sem um ativo tangível como 'Plano B'.",
            "Não ter orientação experiente de quem já conquistou o imóvel no exterior.",
            "Procrastinar pensando que o câmbio ou política impedem o momento certo."
          ].map((error, i) => (
             <div key={i} className="flex items-center gap-4 p-4 bg-red-950/10 border border-red-900/30 rounded-lg backdrop-blur-sm">
                <XCircle className="text-red-500 shrink-0" size={20} />
                <span className="text-slate-300">{error}</span>
             </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 relative z-10">
            <Button withIcon>Sim, quero resolver isso agora</Button>
        </div>
      </Section>

      {/* 5. Solution/Differentiators */}
      <Section className="bg-brand-dark" background={<PatternBackground />}>
        <h2 className="text-3xl font-bold text-center mb-12">Blindagem Patrimonial Definitiva</h2>
        <p className="text-center text-slate-400 mb-12 -mt-8">Esqueça tudo que você já viu. Isto aqui é totalmente diferente.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            { icon: <ShieldCheck />, title: "Segurança Jurídica (LLC)", desc: "Prioridade máxima na proteção do ativo através da criação da Limited Liability Company." },
            { icon: <DollarSignIcon />, title: "Renda Recorrente em Dólar", desc: "Receba aluguéis em moeda forte, garantindo poder de compra que não desvaloriza." },
            { icon: <Layout />, title: "Gestão Remota", desc: "Passo a passo prático para operar o imóvel como negócio à distância." },
            { icon: <GlobeIcon />, title: "Paz de Espírito Global", desc: "Elimine a preocupação com a instabilidade política e econômica do Brasil." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-card p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all group backdrop-blur-sm">
               <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                 {item.icon}
               </div>
               <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
               <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Quote Section Style Update */}
        <div className="mt-20 max-w-4xl mx-auto text-center relative px-6 z-10">
            <Quote className="w-16 h-16 text-emerald-500/10 absolute -top-10 left-0 md:-left-8" />
            <div className="relative z-10">
                 <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                    "O Dólar representa mais de 60% das reservas globais. Você investirá na <span className="text-emerald-400 font-medium not-italic">moeda mais sólida do mundo</span>."
                 </p>
            </div>
        </div>

        <div className="flex justify-center mt-12 relative z-10">
            <Button withIcon className="text-sm py-2 px-6">Sim, quero resolver isso agora</Button>
        </div>
      </Section>

      {/* 6. Who is it for */}
      <Section className="bg-[#0B1221]">
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-brand-card p-8 rounded-2xl border border-slate-800">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <CheckCircle className="text-emerald-500" /> Para quem é
                </h3>
                <ul className="space-y-4">
                    {[
                        "Quer resolver a vulnerabilidade patrimonial e medo da inflação.",
                        "Já possui capital mas sente que está perdendo valor a cada dia.",
                        "Quer um Legado de Segurança (moradia/estudo) para os filhos.",
                        "Deseja proteger o patrimônio mas tem medo da burocracia."
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm">
                            <span className="text-emerald-500 text-lg">✓</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-brand-card p-8 rounded-2xl border border-slate-800/50 opacity-80">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Lock className="text-red-500" /> Para quem NÃO é
                </h3>
                <ul className="space-y-4">
                    {[
                        "Busca soluções milagrosas ou enriquecimento rápido.",
                        "Não está disposto a seguir roteiros e checklists.",
                        "Acredita que não precisa de estrutura jurídica para proteção."
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm">
                            <span className="text-red-500/60">•</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </Section>

      {/* 7. Quote */}
      <section className="py-20 text-center px-4 bg-brand-dark">
         <h2 className="text-2xl md:text-4xl font-serif italic text-slate-300 max-w-4xl mx-auto leading-relaxed">
            "Lembre-se: Medo não cria sonhos. O seu futuro em dólar é construído com ação, não com hesitação."
         </h2>
      </section>

      {/* 8. How It Works (Timeline) */}
      <Timeline />

      {/* 9. Deliverables */}
      <Section className="bg-brand-dark" background={<PatternBackground />}>
         <div className="bg-gradient-to-b from-brand-card to-brand-dark p-8 md:p-12 rounded-3xl border border-slate-800 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">O que tem dentro do Método?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                {[
                    { title: "Implantação da LLC", desc: "Aulas práticas para criar a estrutura jurídica de blindagem.", icon: <BookOpen className="text-emerald-500" /> },
                    { title: "Checklists e Templates", desc: "Modelos de contratos e guias operacionais.", icon: <CheckCircle className="text-emerald-500" /> },
                    { title: "Dolarização Acelerada", desc: "Estratégias para investir com baixo risco.", icon: <DollarSignIcon className="text-emerald-500" /> },
                    { title: "Estratégia Autoquitação", desc: "Planejamento para o aluguel pagar o financiamento.", icon: <DollarSignIcon className="text-emerald-500" /> },
                    { title: "Painel de Parceiros", desc: "Seleção de corretores e contadores certificados.", icon: <Users className="text-emerald-500" /> },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 font-bold text-white text-lg">
                           {item.icon} {item.title}
                        </div>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </Section>

      {/* 10. Comparison */}
      <Comparison />

      {/* 11. Testimonials */}
      <Section className="bg-[#0B1221]">
        <h2 className="text-3xl font-bold text-center mb-12">Resultados Reais</h2>
        <p className="text-center text-slate-400 -mt-8 mb-12">O próximo case de sucesso será o seu.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { name: "Carlos Mendes", role: "Empresário", text: "A maior transformação foi a paz de espírito. Eu vivia preocupado com o Brasil. Agora, meu patrimônio está seguro em dólar." },
                { name: "Fernanda Costa", role: "Médica", text: "O que parecia impossível virou um roteiro claro. Consegui iniciar a dolarização de forma segura." },
                { name: "Roberto Almeida", role: "Advogado", text: "Não é só investimento, é um legado. Hoje sei que meus filhos e netos terão uma base segura nos EUA." },
                { name: "Ricardo Silva", role: "Engenheiro", text: "O passo a passo de gestão remota me deu a confiança de que posso operar um negócio à distância." }
            ].map((t, i) => (
                <div key={i} className="bg-brand-card p-6 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                             <img src={`https://picsum.photos/100/100?random=${i}`} alt={t.name} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">{t.name}</p>
                            <p className="text-xs text-slate-500">{t.role}</p>
                        </div>
                    </div>
                    <p className="text-slate-300 text-xs italic">"{t.text}"</p>
                    <div className="flex gap-1 mt-4 text-emerald-500 text-[10px]">★★★★★</div>
                </div>
            ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button withIcon className="text-sm">Sim, quero resolver isso agora</Button>
        </div>
      </Section>

      {/* 17. Bio (Moved up slightly for flow in single page) */}
      <Section className="bg-brand-dark" background={<PatternBackground />}>
         <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto relative z-10">
            <div className="w-full md:w-1/3">
                 <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-emerald-900/50 shadow-2xl relative">
                    <img src="https://picsum.photos/600/800?grayscale" alt="Prof. Elias" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 </div>
            </div>
            <div className="flex-1 text-left">
                <span className="text-emerald-500 font-bold text-sm tracking-wider uppercase">O Especialista</span>
                <h2 className="text-4xl font-bold text-white mt-2 mb-6">Prof. Elias</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                    O Prof. Elias atua há mais de 10 anos operando imóvel de locação nos EUA e é dono de LLC no país. É investidor profissional no ramo imobiliário, com ativos no Brasil e no exterior, tendo superado até mesmo a paralisação da pandemia.
                </p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Ele é o mentor por trás do método validado que transformará sua incerteza em Blindagem Patrimonial. Sua missão é democratizar o acesso ao investimento internacional de forma segura e estruturada.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                    <div>
                        <span className="block text-3xl font-bold text-white">10+</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">Anos de Experiência</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-white">US$</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">Patrimônio Dolarizado</span>
                    </div>
                </div>
            </div>
         </div>
      </Section>

      {/* 12. Bonuses */}
      <Section className="bg-[#0B1221]">
          <h2 className="text-3xl font-bold text-center mb-4">Bônus Exclusivos</h2>
          <p className="text-center text-slate-400 mb-12">Entrando agora, você leva R$ 841,00 em bônus GRÁTIS.</p>
          
          <div className="space-y-6 max-w-4xl mx-auto">
              {[
                  { title: "Agente de Chatbot Dólar Sem Medo", desc: "IA treinada para tirar suas dúvidas complexas sobre mercado americano 24h.", price: "R$ 197,00", icon: <Bot /> },
                  { title: "Guia 2026: Melhores Bairros", desc: "Onde investir AGORA para maximizar receita na Copa e Olimpíadas.", price: "R$ 147,00", icon: <Map /> },
                  { title: "Clube Dólar Sem Medo", desc: "Networking e suporte contínuo com investidores já em ação.", price: "R$ 497,00", icon: <Users /> }
              ].map((bonus, i) => (
                  <div key={i} className="bg-brand-card p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center gap-6 group hover:border-emerald-500/30 transition-colors">
                      <div className="w-20 h-20 bg-slate-800 rounded-lg shrink-0 flex items-center justify-center text-emerald-500 overflow-hidden relative">
                         {/* Placeholder for bonus image */}
                         <div className="absolute inset-0 bg-black/50 z-0"></div>
                         <img src={`https://picsum.photos/200/200?random=${10+i}&grayscale`} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                         <div className="relative z-10">{bonus.icon}</div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                          <h3 className="text-lg font-bold text-emerald-400 mb-1">{bonus.title}</h3>
                          <p className="text-slate-400 text-sm mb-2">{bonus.desc}</p>
                          <p className="text-xs text-slate-500 line-through">Custaria: {bonus.price}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

      {/* 14. Pricing CTA */}
      <Pricing />

      {/* 16. FAQ */}
      <FAQ />

      {/* 18. Footer */}
      <footer className="bg-black py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-8 mb-8">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Phone /></a>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 text-xs text-slate-600 mb-8">
                 <a href="#">Política de Privacidade</a>
                 <span className="hidden md:inline">•</span>
                 <a href="#">Termos de Uso</a>
            </div>

            <div className="text-slate-700 text-xs">
                <p className="mb-2">Dólar Sem Medo © 2025. Todos os direitos reservados.</p>
                <p className="max-w-2xl mx-auto">
                    Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
                </p>
            </div>
            
        </div>
      </footer>
    </div>
  );
}

// Helper icons (simple SVG wrappers if Lucide import fails or for custom needs)
const GlobeIcon = ({ className = "" }: { className?: string }) => <Globe className={`w-6 h-6 ${className}`} />;
const DollarSignIcon = ({ className = "" }: { className?: string }) => <DollarSign className={`w-6 h-6 ${className}`} />;

export default App;