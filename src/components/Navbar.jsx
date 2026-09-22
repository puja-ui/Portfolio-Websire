import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['about', 'skills', 'experience', 'projects'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider section active if its top is above 200px and bottom is below 200px from viewport top
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          {/* <Code2 className="logo-icon text-gradient" size={28} /> */}
          {/* <span className="logo-text">Puja.K</span> */}
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a key={link.name} href={link.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                {link.name}
              </a>
            );
          })}
          <a href="mailto:pujakarmakar2k@gmail.com" className="btn-primary">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <a href="mailto:pujakarmakar2k@gmail.com" className="btn-primary mobile-btn">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
