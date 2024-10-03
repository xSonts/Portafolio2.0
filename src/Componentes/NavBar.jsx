import React, { useState } from 'react';
import '../Css/Navbar.css';

function Navbar({ activeSection, showSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    showSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={isMenuOpen ? 'show' : ''}>
        {['portafolio', 'resumen', 'habilidades', 'experiencia'].map((section) => (
          <li key={section}>
            <a
              href="#"
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;