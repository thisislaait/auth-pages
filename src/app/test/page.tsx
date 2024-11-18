// pages/test.tsx
import React from 'react';
import Button from '../components/Button';

const TestPage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default TestPage;
