import React from 'react';
import { motion } from 'framer-motion';

export const ChartBackground: React.FC = () => {
  // Configuração das "velas" flutuantes
  const candles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    height: 20 + Math.random() * 60, // altura base em px
  }));

  // Definição do caminho do gráfico (curva financeira)
  // Desenhado para um viewBox 0 0 100 100
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

      {/* Camada 2: Gráfico de Linha Animado */}
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
          <motion.path
            d={`${pathD} L 100 100 L 0 100 Z`}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Linha desenhando (Draw animation) */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#10B981"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Camada 3: Velas Flutuantes */}
      <div className="absolute inset-0 z-20">
        {candles.map((candle) => (
          <motion.div
            key={candle.id}
            className="absolute bottom-0 w-[1px] bg-emerald-500/30"
            style={{ 
              left: candle.left,
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: [
                `${candle.height}px`, 
                `${candle.height * 1.5}px`, 
                `${candle.height * 0.8}px`
              ],
              opacity: [0, 0.5, 0] 
            }}
            transition={{
              duration: candle.duration,
              repeat: Infinity,
              delay: candle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};