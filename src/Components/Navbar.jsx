import React, { useState } from "react";
import { animated } from "@react-spring/web";
import "../CSS/Navbar.css";
import { Icon } from "@iconify/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
        <div className="topNav">
        </div>
            <ul className="navbar-icons">
                <animated.li>
                <div className="mt-3">
                    <div className="icon-box d-flex gap-2">
                        <div className="iconContent">
                            <Icon icon="material-symbols:home-app-logo" className="fs-3" />
                        </div>
                        <div className="iconContent">
                            <Icon icon="material-symbols:code" className="fs-3"/>
                        </div>
                        <div className="iconContent">
                            <Icon icon="material-symbols:person-4-outline-rounded" className="fs-3" />
                        </div>
                            <hr className="vertical-hr me-1" />
                        <div className="iconContentII">
                            <Icon icon="akar-icons:linkedinv2-fill" className="fs-3" />
                        </div>
                        <div className="iconContentII">
                            <Icon icon="uil:github-alt" className="fs-3" />
                        </div>    
                        <div className="iconContentII">
                            <Icon icon="mdi:whatsapp" className="fs-3" />
                        </div>
                        <div className="ms-5">
                            <img src="/Logo.svg" alt="logo-alex-nordic" className="img-fluid" />
                        </div>
                    </div>        
                </div>
                </animated.li>
            </ul>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
