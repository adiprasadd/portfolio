import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text card">
          <p className="about-story">
            I need to run.
          </p>
          <p className="about-story">
            It is not just a passion; it is a necessity. Running has become an essential part of my routine to counter a hereditary predisposition to Type 2 diabetes. This deeply personal experience not only heightened my awareness of health issues but also fueled my interest in robotics as a potential solution.
          </p>
          <p className="about-story">
            My early exposure to LEGO and robotics kits blossomed into a more profound engagement, culminating in my team placing 2nd at the World Robotics Olympiad Canadian Nationals. This achievement was more than a competition victory; it validated my potential to make a real impact.
          </p>
          <p className="about-story">
            My ambition is to explore multiple facets of medical robotics, from prosthetics to surgical assistants, driven by the desire to innovate in ways that could change lives. I want to use robotics to Re-imagine, Understand and Navigate (R.U.N.) the healthcare field.
          </p>
          <p className="about-story">
            Beyond my passion for robotics and health innovation, I am deeply inspired by the endless possibilities of artificial intelligence and its intersection with engineering. Whether tinkering with hardware, writing software, or exploring the interplay between the two, I find joy in creating systems that push boundaries. My interests extend to soccer, where I appreciate the teamwork and strategy that mirror my approach to problem-solving, and music, which fuels my creativity and keeps me grounded. At the core of everything I do is a relentless curiosity and a drive to create meaningful, lasting change.
          </p>
        </div>
        
        <div className="skills-section card">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">C/C++</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Tools</h4>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Tailwind</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">AutoCAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;