import { useState } from 'react';
import headshot from './assets/headshot.png';
import background from './assets/background.jpg';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <img src={background} alt="background" className="bg-img" />

      <nav className="navbar">
        <a href="/" className="nav-left">
          <img src={headshot} alt="William Chen" className="nav-headshot" />
          <span className="nav-name">WILLIAM CHEN</span>
        </a>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-right ${menuOpen ? 'mobile-menu' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>RESUME</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>
      </nav>

      <div className="bio">
        <h1>Hello, I'm William Chen</h1>
      </div>
    </div>
  );
}

export default App;
