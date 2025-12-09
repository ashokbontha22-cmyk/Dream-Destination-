import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 hover:shadow-lg focus:ring-brand-orange",
    secondary: "bg-brand-navy text-white hover:bg-blue-900 hover:shadow-lg focus:ring-brand-navy",
    outline: "bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    white: "bg-white text-brand-navy hover:bg-gray-100 hover:shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};