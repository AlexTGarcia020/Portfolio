import React, { useState } from "react";
import { animated } from "@react-spring/web";
import { slide as Menu } from 'react-burger-menu';
import { Icon } from "@iconify/react";
import { useMediaQuery } from 'react-responsive';

import "../CSS/Navbar.css";
import { Link } from "react-router-dom";


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
                        <a style={{textDecoration:"none"}} className="text-white mb-1" href={"#inicio"}>
                            <Icon icon="material-symbols:home-app-logo" className="fs-3" />
                        </a>
                        </div>
                        <div className="iconContent">
                            <a style={{textDecoration:"none"}} className="text-white mb-1" href={"#tecnologias"}>
                                <Icon icon="material-symbols:person-4-outline-rounded" className="fs-3" />
                            </a>
                        </div>
                        <div className="iconContent">
                        <a style={{textDecoration:"none"}} className="text-white mb-1" href={"#proyectos"}>
                                <Icon icon="material-symbols:code" className="fs-3"/>
                        </a>
                        </div>
                            <hr className="vertical-hr me-1" />
                        <div className="iconContentII">
                        <a style={{textDecoration:"none"}} className="text-white mb-1" href={"https://www.linkedin.com/in/alex-garcia20/"}>
                            <Icon icon="akar-icons:linkedinv2-fill" className="fs-3" />
                        </a>
                        </div>
                        <div className="iconContentII">
                        <a style={{textDecoration:"none"}} className="text-white mb-1" href={"https://github.com/AlexTGarcia020"}>
                            <Icon icon="uil:github-alt" className="fs-3" />
                        </a>
                        </div>    
                        <div className="iconContentII">
                        <a style={{textDecoration:"none"}} className="text-white mb-1" href={"https://wa.link/yz76f6"}>
                            <Icon icon="mdi:whatsapp" className="fs-3" />
                        </a>
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
                customBurgerIcon={<img src="/Burger1.svg"/> }
                burgerButtonClassName="button-burger"
                overlayClassName="overlay-burger"
                menuClassName="menu-burger"
                customCrossIcon={<img src="/Burger.svg"/> }
                crossButtonClassName="cross-burger"
                >
                    <div className="menu-content">
                        <div className="link-burger">
                            <div className="individual-burger">
                            <a style={{textDecoration:"none"}} className="Link-Navbar" href={"#inicio"}>
                                <Icon icon="material-symbols:home-app-logo" className="fs-2" /><h1 className="text-indiviual">Inicio</h1>
                            </a>
                           </div>    
                            <div className="individual-burger">
                            <a style={{textDecoration:"none"}} className="Link-Navbar" href={"#tecnologias"}>
                                <Icon icon="material-symbols:person-4-outline-rounded" className="fs-2" /><h1 className="text-indiviual">Habilidades</h1>
                            </a>
                            </div>                                
                            <div className="individual-burger">
                                <a style={{textDecoration:"none"}} className="Link-Navbar" href={"#proyectos"}>
                                 <Icon icon="material-symbols:code" className="fs-2"/><h1 className="text-indiviual">Proyectos</h1>
                                </a>
                            </div>
                        </div>
                            
                            <div className="link-burger-II">
                                <div className="individual-burger-two">
                                <a style={{textDecoration:"none"}} className="Link-Navbar" href={"https://www.linkedin.com/in/alex-garcia20/"}>
                                    <Icon icon="akar-icons:linkedinv2-fill" className="fs-3" /><h1 className="text-indiviual">LinkedIn</h1>
                                </a>
                                </div>
                            </div>
                            <div className="link-burger-II">
                                 <div className="individual-burger-two">
                                 <a style={{textDecoration:"none"}} className="Link-Navbar" href={"https://github.com/AlexTGarcia020"}>
                                    <Icon icon="uil:github-alt" className="fs-3" /><h1 className="text-indiviual">Github</h1>
                                 </a>
                                 </div>   
                            </div>    
                            <div className="link-burger-II">
                                <div className="individual-burger-two">
                                <a style={{textDecoration:"none"}} className="Link-Navbar" href={"https://wa.link/yz76f6"}>
                                    <Icon icon="mdi:whatsapp" className="fs-3" /><h1 className="text-indiviual">WhatsApp</h1>
                                </a>
                                </div>    
                            </div>
                    </div>
              </Menu>
            </div>
            )}
    </nav>
  );
}

export default Navbar;
