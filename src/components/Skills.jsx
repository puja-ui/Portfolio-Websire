import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Frameworks",
      skills: ["Playwright", "WebdriverIO", "Mocha", "Selenium", "Cucumber", "Vitest"]
    },
    {
      title: "CI/CD & DevOps",
      skills: ["GitHub Actions", "Azure DevOps", "Copado robotic testing"]
    },
    {
      title: "Performance & API Testing",
      skills: ["Locust", "Postman", "Axios", "REST", "GraphQL", "WebSocket"]
    },
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Java", "SQL"]
    },
    {
      title: "Test Management",
      skills: ["Jira", "TestRail", "AIO Tests", "Qase TestOps"]
    },
    {
      title: "Methodologies",
      skills: ["Agile", "Scrum", "BDD", "TDD", "Page Object Model", "Shift-Left Testing"]
    },
    {
      title: "GenAI & AI Tools",
      skills: ["LLM Evaluation", "Hallucination Detection", "Prompt-based Test Generation", "Gemini/OpenAI API", "Self-Healing Locators", "GitHub Copilot", "Google Antigravity"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className={`skill-card glass-panel animate-fade-in stagger-${(idx % 4) + 1}`}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
