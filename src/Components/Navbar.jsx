import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../CSS/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isMenuOpen ? "scale(1)" : "scale(0)", 
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

     
      <ul className="navbar-icons">
        <animated.li style={menuAnimation}>
          <div className="icon-box">
            <i className="fa fa-home"></i>
          </div>
        </animated.li>
      </ul>
    </nav>
  );
}

export default Navbar;