'use client';

import React from 'react';

interface TextLinkProps {
  href: string;
  label: string;
  className?: string;
}

const TextLink: React.FC<TextLinkProps> = ({ href, label, className = '' }) => {
  return (
    <a
      className={`text-blue-500 hover:underline ${className}`}
      href={href}
    >
      {label}
    </a>
  );
};

export default TextLink;
