import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>CCS112</h1>
          <p className="tagline">My Portfolio</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;