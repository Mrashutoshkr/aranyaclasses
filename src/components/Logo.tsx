import React from 'react';

interface LogoProps {
  className?: string;
}

export const AranyaLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden rounded-full flex items-center justify-center bg-white`}>
      <img
        src="/logo.jpg"
        alt="Aranya Classes Logo"
        className="w-full h-full object-cover scale-150"
      />
    </div>
  );
};