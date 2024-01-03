import React from 'react';
import '../../src/App.css';

function Scroll() {
  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button className="btn" onClick={handleClick}>
      <div className="scroll"></div>
    </button>
  );
}

export default Scroll;