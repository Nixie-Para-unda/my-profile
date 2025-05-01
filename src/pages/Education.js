import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <h1 className="section-title">Education</h1>
      
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h2>Bachelor of Science in Information Technology</h2>
            <h3>Pamantasan ng Cabuyao</h3>
            <p className="timeline-date">2022 - Present</p>
            <p>
                Currently pursuing a degree in Information Technology. Gaining skills in programming, databases, and web development through hands-on coursework and projects.
            </p>
            <div className="relevant-courses">
              <h4>Relevant Coursework:</h4>
              <ul>
                <li>Web Development</li>
                <li>Database Management</li>
                <li>Object-Oriented Programming</li>
                <li>Network Systems</li>
                <li>Information Security</li>
              </ul> 
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <h2>Senior High School</h2>
            <h3>Paranaque National Highschool - Main</h3>
            <p className="timeline-date">2020 - 2022</p>
            <p>
                Graduated with High Honors. Focused on STEM strand, which provided a strong foundation in mathematics and science. 
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Education;