import React from 'react';

function Projects() {
  const projects = [
    {
      title: "BehaViewer",
      subtitle: "Newhacks 2024",
      description: "Full-stack React and Python application analyzing TELUS customer data for improved retention through personalized recommendations.",
      tech: ["Python", "React", "Tailwind"],
      achievements: [
        "Optimized data processing pipelines, reducing runtime by 25%",
        "Led presentation to TELUS executives"
      ]
    },
    {
      title: "Robotic Exoskeleton Arm",
      subtitle: "Research Project",
      description: "Implemented Lego Robotics resources to build a surrounding exoskeleton hand and partial forearm.",
      tech: ["C++", "RobotC", "Lego EV3"],
      achievements: [
        "Individual joint control implementation",
        "Programmed complex motion sequences"
      ]
    },
    {
      title: "DistroBot",
      subtitle: "Engineering Project",
      description: "Engineered a structurally rigid robot with 95% mechanical accuracy for payload handling.",
      tech: ["C++", "RobotC", "PID Control"],
      achievements: [
        "95% mechanical accuracy",
        "90% tested distribution accuracy"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <ul className="achievements-list">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
