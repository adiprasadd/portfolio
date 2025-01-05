import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </Link>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><a href="/#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="/#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="/#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;