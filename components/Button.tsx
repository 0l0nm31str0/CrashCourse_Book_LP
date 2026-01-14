import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "h-[50px] px-6 text-[16px] font-semibold transition-colors duration-200 uppercase tracking-wide flex items-center justify-center border-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] cursor-pointer no-underline";
  
  const variants = {
    primary: "bg-[#FFD700] text-black hover:bg-[#E5C100]",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    black: "bg-black text-white hover:bg-gray-800",
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={props.target} rel={props.rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;