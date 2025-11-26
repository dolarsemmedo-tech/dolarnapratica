import React from 'react';

export const ChartBackground: React.FC = () => {
  // Configuração das "velas" flutuantes
  const candles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    height: 20 + Math.random() * 60, // altura base em px
  }));

  // Definição do caminho do gráfico (curva financeira)
  const pathD = "M0 80 C 20 75, 25 90, 40 60 S 60 70, 70 40 S 90 50, 100 20";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      
      {/* Camada 1: Grid Estático com Máscara */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
        }}
      />

      {/* Camada 2: Gráfico de Linha Animado (CSS Puro) */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 z-10 opacity-40">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Área preenchida (Fade In) */}
          <path
            d={`${pathD} L 100 100 L 0 100 Z`}
            fill="url(#chartGradient)"
            className="animate-fade-in opacity-0"
          />

          {/* Linha desenhando (Draw animation via stroke-dasharray) */}
          <path
            d={pathD}
            fill="none"
            stroke="#10B981"
            strokeWidth="0.5"
            strokeLinecap="round"
            className="animate-draw"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />
        </svg>
      </div>

      {/* Camada 3: Velas Flutuantes */}
      <div className="absolute inset-0 z-20">
        {candles.map((candle) => (
          <div
            key={candle.id}
            className="absolute bottom-0 w-[1px] bg-emerald-500/30 animate-candle"
            style={{ 
              left: candle.left,
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)',
              animationDelay: candle.animationDelay,
              animationDuration: candle.animationDuration
            }}
          />
        ))}
      </div>
    </div>
  );
};