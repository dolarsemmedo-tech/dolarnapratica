import React from 'react';
import { Play, ShieldCheck, TrendingUp, Globe, Lock } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-20 pb-20">
      
      {/* Background Image (Real Property) - Low Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Property" 
          className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/90"></div>
      </div>

      {/* Animated Bars Background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 flex items-end justify-center px-4 opacity-20 pointer-events-none gap-1 md:gap-3 z-0">
         {Array.from({ length: 30 }).map((_, i) => (
            <div 
               key={i} 
               className="w-full md:w-8 bg-emerald-500 rounded-t-sm"
               style={{
                  height: `${Math.random() * 50 + 10}%`,
                  animation: `fluctuate ${Math.random() * 2 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
               }}
            ></div>
         ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-xl">
            Blindagem Patrimonial
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
            Construa uma <span className="text-emerald-500">Blindagem <br className="hidden md:block"/> Definitiva</span> em Dólar
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Domine o método passo a passo para comprar, estruturar e gerenciar seu imóvel em Orlando de forma remota, eliminando a confusão e a incerteza jurídica que paralisam 99% dos brasileiros.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full justify-center">
            <Button withIcon className="shadow-emerald-900/50 shadow-2xl scale-110">
                Sim, quero resolver isso agora
            </Button>
          </div>

          {/* Video Section - Centered */}
          <div className="w-full max-w-4xl mx-auto relative group cursor-pointer">
             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
             <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                 <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                     <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                     <span className="text-[10px] font-bold text-white tracking-widest uppercase">Ao Vivo</span>
                 </div>
                 
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="ml-1 text-white fill-current" size={32} />
                    </div>
                 </div>
                 {/* Placeholder for Video Thumbnail */}
                 <div className="w-full h-full bg-slate-800 opacity-60 flex items-center justify-center">
                    <img src="https://picsum.photos/1200/800?grayscale" alt="Video Thumbnail" className="w-full h-full object-cover" />
                 </div>
             </div>
             <p className="mt-4 text-sm text-slate-500 font-medium">Veja o vídeo antes que saia do ar</p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-70">
             <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Lock size={16} className="text-emerald-500"/> Compra Segura
             </div>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Globe size={16} className="text-emerald-500"/> Investimento Internacional
             </div>
             <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <ShieldCheck size={16} className="text-emerald-500"/> Proteção Jurídica
             </div>
          </div>

      </div>
    </div>
  );
};