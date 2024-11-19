'use client';

import React from 'react';
import Image from 'next/image';

// Define the props for Button component
interface ButtonProps {
  children: React.ReactNode;
  // label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

// Define the props for LinkButton component
interface LinkButtonProps extends ButtonProps {
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

}

// Define the props for TextLink component
interface TextLinkProps {
  href: string;
  // label: string;
  className?: string;
  children: React.ReactNode; // Ensure children prop is included here
}

// Button component: renders a button element
export const Button: React.FC<ButtonProps> = ({ 
  children,
  // label, 
  onClick, 
  className = '', 
  type = 'button', 
  disabled = false 
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`py-2 px-4 rounded ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    disabled={disabled}
  >
    {children}
  </button>
);

// LinkButton component: renders a link with an optional image and label
export const LinkButton: React.FC<LinkButtonProps> = ({ 
  href, 
  // label, 
  imageSrc, 
  imageAlt, 
  imageWidth = 20, 
  imageHeight = 20, 
  className = '', 
  children,
}) => (
  <a
    href={href}
    className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {imageSrc && (
      <Image 
        className="dark:invert"
        src={imageSrc} 
        alt={imageAlt || 'icon'} 
        width={imageWidth} 
        height={imageHeight} 
      />
    )}
    {children}
  </a>
);

// TextLink component: renders a simple text link
export const TextLink: React.FC<TextLinkProps> = ({ 
  href, 
  className = '', 
  children
}) => (
  <a 
    href={href} 
    className={`text-blue-600 hover:underline ${className}`}
  >
    {children} {/* Render children if provided, else render label */}
  </a>
);

