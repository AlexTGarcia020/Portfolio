import React, { useState } from "react";
import { animated } from "@react-spring/web";
import { slide as Menu } from 'react-burger-menu';
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';

import "../CSS/Navbar.css";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const menuClassName = isMenuOpen ? "navbar show-menu" : "navbar hide-menu";

  return (
    <nav className={menuClassName}>
      <div className="topNav"></div>
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
            {isMobile && (
                <Menu 
                slide 
                right 
                isOpen={isMenuOpen} 
                onStateChange={handleMenuStateChange}
                customBurgerIcon={<img src="/Burger.svg"/> }
                overlayClassName="overlay-burger"
                menuClassName="menu-burger"
                customCrossIcon={<img src="/CloseB.svg" /> }
                >
                <div className="menu-content">
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a className="menu-item--small" href="">Settings</a>
                </div>
                </Menu>
            )}
    </nav>
  );
}

export default Navbar;
