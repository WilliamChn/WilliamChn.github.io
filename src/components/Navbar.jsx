import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/headshot.png';
import "../styles/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else {
      const timeout = setTimeout(() => setMenuVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-left">
        <img src={headshot} alt="William Chen" className="nav-headshot" />
        <span className="nav-name">WILLIAM CHEN</span>
      </Link>

      <div className="nav-right desktop-nav">
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {menuVisible && (
        <div className={`nav-right mobile-menu ${menuOpen ? 'fade-in' : 'fade-out'}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>RESUME</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
