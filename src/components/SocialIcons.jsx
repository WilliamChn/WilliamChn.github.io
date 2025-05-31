// SocialIcons.jsx
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

export function SocialIconsDesktop() {
  return (
    <div className="social-icons-desktop">
      <a href="https://www.linkedin.com/in/will-ch/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com/WilliamChn" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="social-icon" />
      </a>
    </div>
  );
}

export function SocialIconsMobile() {
  return (
    <div className="social-icons-wrapper">
      <a href="https://www.linkedin.com/in/will-ch/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com/WilliamChn" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="social-icon" />
      </a>
    </div>
  );
}
