import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Aditya Prasad</h1>
        <a 
          href="https://linkedin.com/in/adiprasadd" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-link"
        >
          <div className="profile-image-wrapper">
            <img src="profile.png" alt="Aditya Prasad" className="profile-image" />
          </div>
        </a>
        <p className="hero-subtitle">
          <span className="highlight">Software Engineering</span> 
          <span className="plus">+</span> 
          <span className="highlight-alt">AI & Human-Computer Interaction Option</span>
          <br />
          <span className="university">@ University of Waterloo</span>
        </p>
        <div className="hero-description">
          AI Research Intern @ Preamble AI
          <span className="location-tag">Pittsburgh, PA (Remote)</span>
        </div>
        <a 
          href="/Aditya_Prasad_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;