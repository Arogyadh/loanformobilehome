import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode; // Optional explicit icon prop
  size?: 'default' | 'icon'; // Add size prop
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  size = 'default', 
  className, 
  ...props 
}) => {
  const baseClasses = cn(
    "flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg rounded-lg font-semibold shadow-[0px_2px_4px_0px_rgba(0,0,0,0.20),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)]",
    size === 'icon' ? 'h-7 w-7 p-0' : 'min-h-12 px-4 py-3 text-base' // Adjust for icon size
  );

  const variants = {
    primary: "bg-[#49274A] text-[#FDFAF8] border-0 hover:bg-[#3d1f3a]",
    secondary: "bg-[#FDFAF8] text-[#635F5C] border border-[#F9F0E9] hover:bg-[#f5f2ef]"
  };

  // Combine children and icon prop if both exist
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  return (
    <button 
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {size === 'icon' ? icon || children : content} {/* Render icon alone for size="icon" */}
    </button>
  );
};