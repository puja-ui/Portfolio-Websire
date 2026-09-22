import React from 'react';
import { ChevronRight, Mail, Phone, FileText } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in stagger-1">
          <div className="badge glass-panel">
            <span className="text-gradient">SDET II | Test Automation Lead</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm Puja Karmakar. <br />
            <span className="text-gradient hero-title-sub">
              Automating quality. <br />
              Augmenting it with AI.
            </span>
          </h1>
          
          <p className="hero-subtitle">
            I build resilient test automation systems using TypeScript, Playwright, 
            WebdriverIO and Java/Selenium — and lately, I've been teaching them to fix themselves 
            with a little help from GenAI.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Projects
              <ChevronRight size={20} className="icon-right" />
            </a>
            <a href="https://linkedin.com/in/puja-karmakar-161283194" target="_blank" rel="noreferrer" className="btn-icon glass-panel">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/puja-ui" target="_blank" rel="noreferrer" className="btn-icon glass-panel">
              <Github size={20} />
            </a>
            <a href="mailto:pujakarmakar2k@gmail.com" className="btn-icon glass-panel">
              <Mail size={20} />
            </a>
            <a href="tel:+916294920083" className="btn-icon glass-panel" title="Call Me">
              <Phone size={20} />
            </a>
            <a href="https://drive.google.com/file/d/1rsC3C2J2UIYXBkYtw5dam8wS3Kzx1fG0/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-icon glass-panel" title="Download Resume">
              <FileText size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-graphics animate-fade-in stagger-2">
          <div className="glow-orb"></div>
          <div className="glass-card main-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
<span className="keyword">const</span> <span className="variable">engineer</span> = {'{'}
<br />  name: <span className="string">'Puja Karmakar'</span>,
<br />  role: <span className="string">'SDET II / Lead'</span>,
<br />  skills: [<span className="string">'TypeScript'</span>, <span className="string">'WebdriverIO'</span>, <span className="string">'Playwright'</span>, <span className="string">'Java'</span>],
<br />  passions: [<span className="string">'GenAI'</span>, <span className="string">'CI/CD'</span>, <span className="string">'Self-Healing'</span>]
<br />  available: <span className="boolean">true</span>
<br />{'}'};
<br />
<br /><span className="keyword">await</span> engineer.<span className="function">automate</span>();
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
