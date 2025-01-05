import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-heading animate-fade">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category animate-fade">
          <h3>Languages</h3>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Java</span>
          </div>
        </div>
        <div className="skill-category animate-fade">
          <h3>Technologies</h3>
          <div className="skill-tags">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">PyTorch</span>
          </div>
        </div>
        <div className="skill-category animate-fade">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span className="skill-tag">VSCode</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
