// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aditya Prasad. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/adiprasadd" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/adiprasadd" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
