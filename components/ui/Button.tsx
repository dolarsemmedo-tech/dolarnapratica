import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-lg shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-900/20 hover:shadow-emerald-500/40 border border-emerald-500/30",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    outline: "bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-950/30"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={() => {
        // Smooth scroll to pricing or open modal
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight size={20} />}
    </button>
  );
};