import React from 'react';
import '../CSS/Scroll-1.css';

function Scroll2() {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button className="btn-1" onClick={handleClick}>
      <div className="scroll-1"></div>
    </button>
  );
}

export default Scroll2;