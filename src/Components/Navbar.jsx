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
      {!isMobile && (
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
        )}
            {isMobile && (
             <div className="">
                <img src="/Logo.svg" alt="logo-alex-nordic" className="img-burger"/>
              <Menu 
                slide 
                right 
                isOpen={isMenuOpen} 
                onStateChange={handleMenuStateChange}
                customBurgerIcon={<img src="/Burger.svg"/> }
                burgerButtonClassName="button-burger"
                overlayClassName="overlay-burger"
                menuClassName="menu-burger"
                customCrossIcon={<img src="/CloseB.svg"/> }
                crossButtonClassName="cross-burger"
                >
                    <div className="menu-content">
                        <div className="link-burger">
                            <div className="individual-burger">
                                <Icon icon="material-symbols:home-app-logo" className="fs-1" /><h1 className="text-indiviual">Inicio</h1>
                            </div>    
                            <div className="individual-burger">
                                <Icon icon="material-symbols:code" className="fs-1"/><h1 className="text-indiviual">Proyectos</h1>
                            </div>
                            <div className="individual-burger">
                                <Icon icon="material-symbols:person-4-outline-rounded" className="fs-1" /><h1 className="text-indiviual">Sobre Mi</h1>
                            </div>                                
                        </div>
                            
                            <div className="link-burger-II">
                                <Icon icon="akar-icons:linkedinv2-fill" className="fs-3" />
                            </div>
                            <div className="link-burger-II">
                                <Icon icon="uil:github-alt" className="fs-3" />
                            </div>    
                            <div className="link-burger-II">
                                <Icon icon="mdi:whatsapp" className="fs-3" />
                            </div>
                    </div>
              </Menu>
            </div>
            )}
    </nav>
  );
}

export default Navbar;
