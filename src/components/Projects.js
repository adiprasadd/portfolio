import React from 'react';

function Projects() {
  const projects = [
    {
      title: "BehaViewer",
      link: "https://github.com/AumkarMali/BehaViewer",
      subtitle: "Newhacks 2024",
      description: "Advanced machine learning application that leverages HistGradientBoostingClassifier to predict user ISP preferences based on demographic and behavioral data. Built with React frontend and Python backend, the system processes user activity patterns to generate intelligent insights for targeted service improvements.",
      tech: ["Python", "React", "Flask", "Scikit-Learn", "Tailwind"],
      achievements: [
        "Optimized data processing pipelines, reducing runtime by 25%",
        "Led presentation to TELUS executives",
        "Implemented real-time user behavior analysis"
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
      link: "https://github.com/adiprasadd/DistroBot",
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
              {project.link ? (
                <h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link hover:text-blue-500 transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                </h3>
              ) : (
                <h3>{project.title}</h3>
              )}
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
