import React, { useState, useEffect } from 'react';
import "../CSS/textAnimation.css"

const TypewriterEffect = () => {
  const phrases = [
    "Front-End Developer",
    "Desarrollador Front-End",
    "Desarrollador Back-End",
    "Developer Back-End",
    "Full Stack Developer",
    "Desarrollador Full Stack"
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[index].slice(0, text.length + 1));
      if (text.length === phrases[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          setIndex((index + 1) % phrases.length);
        }, 1500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, text, phrases]);

  useEffect(() => {
    const barInterval = setInterval(() => {
      setShowBar((prev) => !prev);
    }, 1000);

    return () => clearInterval(barInterval);
  }, []);

  return (
    <div className='content-write' style={{ minHeight: '150px' }}>
      <span className='font-write'>{text}</span>
      {showBar && <span className="blink">|</span>}
    </div>
  );
};

export default TypewriterEffect;
