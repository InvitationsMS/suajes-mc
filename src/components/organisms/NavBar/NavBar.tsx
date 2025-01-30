import React, { useState } from 'react';
import './NavBar.scss';
import texts from '../../../constants/texts';

export interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, ] = useState<string>(''); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src='images\MC.png' width={50}></img>
          <img src='images\logo-text.png' width={100}></img>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={toggleMenu} className={`nav-link ${activeLink === 'hero' ? 'active' : ''}`}>{texts.navbar.home}</a></li>
          <li><a href="#services" onClick={toggleMenu} className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}>{texts.navbar.services}</a></li>
          <li><a href="#about" onClick={toggleMenu} className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>{texts.navbar.about}</a></li>
          <li><a href="#contact" onClick={toggleMenu} className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}>{texts.navbar.contact}</a></li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default NavBar;
