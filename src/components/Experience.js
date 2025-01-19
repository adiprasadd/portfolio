import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "AI Engineering Intern",
      company: "Preamble AI",
      logo: "/preamble.png",
      location: "Pittsburgh, PA (Remote)",
      period: "Aug 2024 - Present",
      description: [
        "Researched enterprise application integrations, developed prototypes, and built a private Huggingface Space demonstrating AI safety features",
        "Conducted market research on AI safety trends; brainstormed and validated potential use cases",
        "Reviewed and updated user guides and API documentation; developed and executed test cases"
      ]
    },
    {
      title: "Robotics Instructor",
      company: "Code Ninjas",
      logo: "/code-ninjas.png",
      location: "Brampton, Ontario",
      period: "Sep 2022 - Aug 2024",
      description: [
        "Worked with students aged 5-16 teaching transferable software and mechanical principles",
        "Pioneered franchise unique robotics curriculum catered to student needs",
        "Communicated with parents concerning student progress and success"
      ]
    },
    {
      title: "Co-founder",
      company: "6ixheat",
      logo: "/sixheat.png",
      location: "Brampton, Ontario",
      period: "Aug 2020 - Present",
      description: [
        "Co-founded local sneaker and clothing resale business performing transactions through various channels",
        "Generated a total of $80,000, $18,000 per annum",
        "Managed customer communications resulting in consistently positive reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-heading">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card card">
            <div className="experience-header">
              <div className="company-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <h3>{exp.title}</h3>
              <span className="company-name">{exp.company}</span>
              <div className="experience-meta">
                <span className="location">{exp.location}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;