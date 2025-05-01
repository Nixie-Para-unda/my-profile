import React from 'react';
import { FaLaptopCode, FaBookReader, FaMusic, FaSwimmer } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-content">
        <div className="about-text">
        <p>
            Hi! I'm Nixie Jewel Paraunda, a 3rd year IT student at Pamantasan ng Cabuyao. 
            </p>
        <p>
            I enjoy learning about web development and working on simple projects that help me improve my skills.
        </p>
        <p>
            I'm still exploring my interests in tech, but I'm excited to grow and build useful applications in the future.
        </p>
        </div>
      </div>
      
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skills-list">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skills-list">
              <li>PHP</li>
              <li>MySQL</li>
              <li>SQL Basics</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul className="skills-list">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>MS Office</li>
              <li>Figma Basics</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="interests-section">
        <h2>My Interests</h2>
        <div className="interests-container">
          <div className="interest-item">
            <div className="interest-icon">
              <FaLaptopCode />
            </div>
            <h3>Coding</h3>
          </div>
          
          <div className="interest-item">
            <div className="interest-icon">
              <FaBookReader />
            </div>
            <h3>Reading</h3>
            <p>Exploring various genres, especially fiction and greek mythodology-related books</p>
          </div>
          
          <div className="interest-item">
            <div className="interest-icon">
              <FaMusic />
            </div>
            <h3>Music</h3>
            <p>Playing guitar and ukulele</p>
          </div>
          
          <div className="interest-item">
            <div className="interest-icon">
                <FaSwimmer />
            </div>
            <h3>Swimming</h3>
            <p>Enjoying the water and staying active through swimming</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;