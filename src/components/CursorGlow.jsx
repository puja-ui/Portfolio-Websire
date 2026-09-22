import React, { useEffect, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="cursor-glow"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)` 
      }} 
    />
  );
};

export default CursorGlow;
