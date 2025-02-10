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
      title: "forg3D",
      link: "https://github.com/adiprasadd/forg3D",
      subtitle: "TartanHacks 2024 - 3rd Place Winner",
      description: "Developed a blockchain-powered 3D model marketplace addressing the $44.7B 3D model industry's IP protection challenges. Built with Next.js 14, the platform enables secure model management with automated royalty distribution, targeting the 37.4% CAGR market growth in digital asset trading.",
      tech: ["TypeScript", "Next.js", "Three.js", "Story Protocol", "TailwindCSS"],
      achievements: [
        "Won 3rd Place among 50+ teams at TartanHacks 2024",
        "Reduced IP registration time by 85% through automated blockchain verification",
        "Implemented smart contracts handling $10K+ in simulated transactions",
        "Built scalable infrastructure supporting 500MB+ file uploads with 99.9% uptime"
      ]
    },
    {
      title: "Feedforward Neural Network",
      link: "https://github.com/adiprasadd/feedforwardNN",
      subtitle: "Machine Learning Project",
      description: "Implemented a custom feedforward neural network in C++ to solve the XOR problem using backpropagation. Built from scratch using only standard libraries, featuring configurable layers, sigmoid activation, and gradient descent optimization.",
      tech: ["C++", "Neural Networks", "Backpropagation"],
      achievements: [
        "Achieved 100% accuracy on XOR classification",
        "Implemented custom weight initialization",
        "Built modular architecture for extensibility"
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
      ],
      noLink: true
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
                <h3 className={project.noLink ? "project-link-style" : ""}>
                  {project.title}
                </h3>
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
