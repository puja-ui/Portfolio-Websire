import React from 'react';
import { Award, Zap, CheckCircle2, TrendingDown, Activity, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel animate-fade-in stagger-1">
            <h3>Professional Summary</h3>
            <p>
              I'm a Senior Quality Engineer with <strong>3.5 years of experience</strong> leading test automation for enterprise Salesforce SaaS platforms in financial services. I focus on building scalable, maintainable frameworks in TypeScript and Java — architecting suites that cut regression time significantly and hold up under real production pressure.
            </p>
            <p>
              I work extensively across UI, API, and performance testing — WebdriverIO and Playwright for automation, REST Assured and Axios for API validation, Locust for load testing. I've led CI/CD pipeline engineering with GitHub Actions, mentored junior engineers, and acted as the primary technical point of contact for a global client.
            </p>
            <p>
              Right now, I'm in a self-directed period building GenAI-integrated QA tools — a self-healing Playwright framework that diagnoses and fixes broken locators using Gemini, an LLM-as-a-Judge evaluation system, and a couple of others. I got curious about whether AI could actually reduce the maintenance burden that eats up most QA time, and building these was my way of finding out.
            </p>
            <p>
              I came into tech through electronics engineering, not computer science — which explains a lot about how I like to explore things outside my usual routine. When I'm not coding or hunting for edge cases at work, you'll probably find me doing photography, playing the flute, or lifting weights.
            </p>
          </div>

          <div className="about-achievements glass-panel animate-fade-in stagger-2">
            <h3>Key Achievements</h3>
            <ul className="achievement-list">
              <li>
                <Award className="achievement-icon" size={24} />
                <div>
                  <strong>93% Highest Technical Audit Score</strong>
                  <span>Achieved company-wide highest score across all projects.</span>
                </div>
              </li>
              <li>
                <Zap className="achievement-icon" size={24} />
                <div>
                  <strong>94% Faster Test Remediation</strong>
                  <span>Achieved via LLM Self-Healing (3hrs → 10min).</span>
                </div>
              </li>
              <li>
                <CheckCircle2 className="achievement-icon" size={24} />
                <div>
                  <strong>81% CI/CD Execution Time Reduction</strong>
                  <span>Slashed execution time from 8 hrs to 1.5 hrs.</span>
                </div>
              </li>
              <li>
                <Award className="achievement-icon" size={24} />
                <div>
                  <strong>450+ Automated Test Cases Architected</strong>
                  <span>TypeScript (300+) + Java (150+).</span>
                </div>
              </li>
              <li>
                <TrendingDown className="achievement-icon" size={24} />
                <div>
                  <strong>45% Reduction in Production Defects</strong>
                  <span>Achieved via Cross-Functional Shift-Left Testing.</span>
                </div>
              </li>
              <li>
                <Activity className="achievement-icon" size={24} />
                <div>
                  <strong>Identified Critical DB Bottleneck</strong>
                  <span>Proactively found via 10,000 RPS Load Testing (Locust).</span>
                </div>
              </li>
              <li>
                <Shield className="achievement-icon" size={24} />
                <div>
                  <strong>Built Company-Wide Security Utility</strong>
                  <span>Adopted by 12+ Teams for encryption/decryption.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
