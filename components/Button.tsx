import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
    secondary: "bg-accent-500 text-slate-900 shadow-lg shadow-accent-500/30 hover:bg-accent-400",
    outline: "border-2 border-slate-600 text-slate-300 hover:border-primary-400 hover:text-white bg-transparent",
    ghost: "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white backdrop-blur-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
};