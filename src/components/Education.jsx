import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="edu-card glass-panel animate-fade-in stagger-1">
          <div className="edu-icon">
            <GraduationCap size={32} />
          </div>
          <div className="edu-content">
            <h3 className="edu-degree">B.Tech in Electronics and Communication Engineering</h3>
            <h4 className="edu-school text-gradient">Siliguri Institute of Technology</h4>
            <div className="edu-meta">
              <span>2019 – 2023</span>
              <span className="dot-separator">•</span>
              <span><MapPin size={14} className="inline-icon"/> West Bengal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
