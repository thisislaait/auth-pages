'use client'; // Enables client-side rendering in Next.js

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void; // Function to execute when the button is clicked
  type?: 'button' | 'submit' | 'reset'; // HTML button type (optional, defaults to 'button')
  disabled?: boolean; // Determines if the button is disabled (optional, defaults to false)
  className?: string; // Additional custom styles for the button (optional)
}

// Button component
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  
  
    return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-blue-500 text-white 
                  hover:bg-blue-600 focus:outline-none 
                  disabled:bg-gray-400 disabled:cursor-not-allowed 
                  ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
