'use client';

import React from 'react';
import Image from 'next/image';

interface LinkButtonProps {
  href: string;
  label: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
//   target?: string;
//   rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  imageSrc,
  imageAlt,
  imageWidth = 20,
  imageHeight = 20,
  className = '',
}) => {
  return (
    <a
      className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {imageSrc && (
        <Image
          className="dark:invert"
          src={imageSrc}
          alt={imageAlt || 'Link icon'}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      {label}
    </a>
  );
};

export default LinkButton;
