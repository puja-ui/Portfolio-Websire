import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Quality Engineer / Test Lead",
      company: "CloudKaptan",
      location: "Kolkata, West Bengal",
      period: "09/2022 – 04/2026",
      domain: "Salesforce SaaS · Financial Services (Loans)",
      bullets: [
        "Architected a 300+ test regression suite in TypeScript/WebdriverIO and a parallel 150+ test Java/Selenium framework (Page Object Model); optimized GitHub Actions CI with parallelization and conditional triggers, slashing execution time by 81% (8 hrs to 1.5 hrs).",
        "Designed and validated 45+ end-to-end user journeys across the Salesforce loan management platform, ensuring functional and cross-browser consistency for critical business workflows.",
        "Integrated an LLM-based self-healing mechanism into the WebdriverIO framework — auto-diagnosing and fixing broken locators — cutting test remediation time by 94% (3 hrs to 10 minutes) and reducing pipeline flakiness; praised by the client for improved reliability.",
        "Extended coverage via API testing across Postman, REST Assured (Java), and Axios (TypeScript); conducted distributed performance testing with Locust (Python), simulating a 3x traffic spike (up to 10,000 RPS) to proactively identify a critical database bottleneck ahead of a major product launch.",
        "Engineered a custom Java Swing encryption/decryption utility for managing dynamic secret keys, adopted company-wide by 12+ teams to secure project authentication parameters.",
        "Built an automated TestRail reporting pipeline delivering daily execution status to client stakeholders, eliminating manual status reporting.",
        "Served as technical SPOC for a global financial services client — led sprint planning, failure analysis, and automation-coverage prioritization calls; collaborated with 10+ cross-functional stakeholders to implement shift-left testing practices, reducing production defects by 45%.",
        "Mentored 4 Junior QEs and conducted 50+ technical interviews; evaluated BDD, Data-Driven, and Hybrid framework architectures via POCs in Playwright, Java/Selenium, and JS/WebdriverIO."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Jobdae Online Learning",
      location: "Remote",
      period: "11/2020 – 02/2021",
      domain: "E-Learning",
      bullets: [
        "Developed responsive frontend interfaces (HTML, CSS, Bootstrap, Flask) and engineered 10+ RESTful APIs for Flask–MySQL data communication."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`timeline-item animate-fade-in stagger-${idx + 1}`}>
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              
              <div className="timeline-content glass-panel">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company text-gradient">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="meta-item"><Calendar size={16} /> {exp.period}</span>
                    <span className="meta-item"><MapPin size={16} /> {exp.location}</span>
                  </div>
                </div>
                
                <p className="exp-domain">{exp.domain}</p>
                
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
