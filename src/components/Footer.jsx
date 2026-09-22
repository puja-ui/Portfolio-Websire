import React from 'react';
import { Mail, Heart } from 'lucide-react';

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
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Puja Karmakar</h3>
            <p>SDET II & Test Automation Lead bridging AI with software quality.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://linkedin.com/in/puja-karmakar-161283194" target="_blank" rel="noreferrer" className="social-link glass-panel">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/puja-ui" target="_blank" rel="noreferrer" className="social-link glass-panel">
              <Github size={20} />
            </a>
            <a href="mailto:pujakarmakar2k@gmail.com" className="social-link glass-panel">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Puja Karmakar. Built with <Heart size={14} className="heart-icon" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
