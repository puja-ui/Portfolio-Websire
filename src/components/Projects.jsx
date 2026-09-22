import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Self-Healing Test Automation Framework",
      link: "https://github.com/puja-ui/Self-Healing-Playwright-TS-Automation-Framework",
      period: "",
      stack: ["Playwright", "TypeScript", "Github actions", "Qase"],
      description: "Built an E2E framework (Page Object Model) with a custom fixture that auto-diagnoses broken locators via Google Gemini 2.5 Flash, generating reviewable fix suggestions with a color-coded diff report; wired into GitHub Actions CI (matrix) with Qase TestOps reporting. Validated against intentional failures — auto-fixed 6-7 of 7 locators without manual intervention."
    },
    {
      title: "LLM-as-a-Judge",
      link: "https://github.com/puja-ui/LLM-as-a-Judge",
      period: "",
      stack: ["TypeScript", "Vitest", "HTML", "Gemini API", "OpenAI API"],
      description: "Built an automated evaluation framework using an independent judge model (Gemini) to score a separate subject model's (GPT-OSS) responses across 5 quality dimensions — hallucination detection, accuracy, relevance, completeness, tone — with a hard-fail rule on hallucination and a self-contained HTML report per run, integrated into GitHub Actions CI."
    },
    {
      title: "Multi-protocol API testing automation framework",
      link: "https://github.com/puja-ui/all-in-one-api-testing-client",
      period: "",
      stack: ["TypeScript", "Vitest", "Github actions", "Qase"],
      description: "Developed a unified REST/GraphQL/WebSocket testing framework under one strongly-typed architecture, covering 25+ test cases across all three protocols; used Zod for environment validation and Faker.js for dynamic data generation. Configured a GitHub Actions matrix running 6 test files in parallel with Qase TestOps reporting."
    },
    {
      title: "TestGenie (live)",
      link: "https://test-genie-one.vercel.app/",
      period: "",
      stack: ["Gemini API", "TypeScript", "Vercel", "Prompt Engineering"],
      description: "Built and deployed an AI-powered test case generator converting feature descriptions into categorized Functional, Security, Boundary, and UX test cases via Gemini, with CSV/JSON/Markdown export. Validated output across real-world sites and a peer's in-development app, where it was used to generate functional test cases."
    },
    {
      title: "SpellFlip (live)",
      link: "https://spell-flip.vercel.app/",
      period: "",
      stack: ["Vanilla JS", "Python", "Vercel Serverless", "Gemini API"],
      description: "Built and deployed a medieval-themed, AI-powered coin toss application that dynamically translates binary decisions into poetic prophecies using the Gemini API. Engineered a lightweight Vanilla JS frontend with CSS parallax animations, backed by a zero-dependency Python Serverless Function on Vercel for secure prompt building and instant cold-starts."
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          Automation & GenAI <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className={`project-card glass-panel animate-fade-in stagger-${(idx % 4) + 1}`}>
              <div className="project-header">
                <Folder size={32} className="project-icon-folder" />
                <a href={project.link || "#"} target="_blank" rel="noreferrer" className="project-external-link">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
