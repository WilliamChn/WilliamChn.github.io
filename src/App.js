import { useState, useEffect } from 'react';
import headshot from './assets/headshot.png';
import background from './assets/background.jpg';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else {
      const timeout = setTimeout(() => setMenuVisible(false), 400); // match fade duration
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <div className="App">
      <img src={background} alt="background" className="bg-img" />

      <nav className="navbar">
        <a href="/" className="nav-left">
          <img src={headshot} alt="William Chen" className="nav-headshot" />
          <span className="nav-name">WILLIAM CHEN</span>
        </a>

        <div className="nav-right desktop-nav">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {menuVisible && (
          <div className={`nav-right mobile-menu ${menuOpen ? 'fade-in' : 'fade-out'}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
            <a href="#resume" onClick={() => setMenuOpen(false)}>RESUME</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </nav>

      <div className="bio">
        <h1>Hello, I'm William Chen</h1>
        <p>A frontend-focused software engineer passionate about building smooth, responsive digital experiences.</p>
        <p>Whether it’s full-stack projects, embedded systems, or frontend development, I thrive at the intersection of code and creativity. I enjoy transforming complex ideas into intuitive, fun interfaces, and I’m always exploring new tools and technologies to improve my craft.</p>
          <div className="see-more-wrapper">
            <a href="#about" className="see-more">
              See More About Me <span className="arrow">→</span>
            </a>
          </div>
          <div className="social-icons-desktop">
            <a href="https://www.linkedin.com/in/will-ch/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/WilliamChn" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </div>
      </div>
        <div className="social-icons-wrapper">
          <a href="https://www.linkedin.com/in/will-ch/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/WilliamChn" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
    </div>
  );
}

export default App;
