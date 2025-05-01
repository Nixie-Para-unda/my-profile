import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Nixie Jewel Para-unda</span></h1>
          <h2>3rd Year IT Student</h2>
            <p>
            Currently learning the basics of web development and improving through hands-on projects.
            </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View My Work <FaArrowRight className="icon-right" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image"></div>
        </div>
      </div>
      
      <div className="quick-info">
        <div className="info-card">
          <h3>Frontend Development</h3>
        </div>
        <div className="info-card">
          <h3>Backend Solutions</h3>
        </div>
        <div className="info-card">
          <h3>Continuous Learning</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;