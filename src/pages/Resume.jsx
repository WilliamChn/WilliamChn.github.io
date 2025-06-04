import "../styles/App.css"
import "../styles/Navbar.css"
import "../styles/Resume.css"
import "../styles/MobileView.css"
import "../styles/SocialIcons.css"

import resumeImage from '../assets/resume.png'; 
import { SocialIconsDesktop, SocialIconsMobile } from "../components/SocialIcons";

const Resume = () => {
  return (
    <>
    <div className="resume-container">
      <h1>Resume</h1>

      {/* Move the buttons here */}
      <div className="resume-actions">
        <a href="/resume.pdf" download>
          <button>Download PDF</button>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>View Fullscreen</button>
        </a>
      </div>

      {/* Resume image comes after the buttons */}
      <img
        src={resumeImage}
        alt="William Chen Resume"
        className="resume-image"
      />

      <SocialIconsDesktop />
    </div>
    <SocialIconsMobile/>
    </>
  );
};

export default Resume;
