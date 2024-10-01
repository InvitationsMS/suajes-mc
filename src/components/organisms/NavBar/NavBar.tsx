import React, { useState } from 'react';
import './NavBar.scss';

export interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
          <li><a href="#about" onClick={toggleMenu}>Sobre nosotros</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default NavBar;
