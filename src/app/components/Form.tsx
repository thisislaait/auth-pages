'use client';

import React from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  className = '',
  required = false,

}) => (
  <div className="flex flex-col mb-4">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  </div>
  
);

interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ 
  name, 
  placeholder, 
  value, 
  onChange, 
  className = '',
  required = false,
}) => (

  <div className="flex flex-col mb-4">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
);

interface SelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ 
  name,
  value,
  onChange,
  options,
  required = false,
  className = '', 

}) => (

  <div className="flex flex-col mb-4">
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  
);
