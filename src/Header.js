import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <nav className="navbar">
        <ul className="nav-list">
  <li className="nav-item">
    <a
      href="#home"
      className="nav-link"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
      }}
    >
      Home
    </a>
  </li>
  <li className="nav-item">
    <a
      href="#projects"
      className="nav-link"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      }}
    >
      Projects
    </a>
  </li>
  <li className="nav-item">
    <a
      href="#contact"
      className="nav-link"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }}
    >
      Contact Me
    </a>
  </li>
</ul>
        </nav>
      </header>
    );
};

export default Header;