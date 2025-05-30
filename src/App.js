import headshot from './assets/headshot.png';
import background from './assets/background.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={background} alt="background" className="bg-img" />

      <nav className="navbar">
        <a href="/" className="nav-left">
          <img src={headshot} alt="William Chen" className="nav-headshot" />
          <span className="nav-name">WILLIAM CHEN</span>
        </a>
        <div className="nav-right">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <div className="hero">
        <h1>William Chen's Portfolio</h1>
      </div>
    </div>
  );
}

export default App;

