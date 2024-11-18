import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact Me</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;