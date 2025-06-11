import { SocialIconsDesktop, SocialIconsMobile } from "../components/SocialIcons";
import "../styles/App.css";
import "../styles/Navbar.css";
import "../styles/MobileView.css";
import "../styles/SocialIcons.css";
import "../styles/Projects.css";
import SmartFanImg from "../assets/Smart_Fan.png";
import WorkoutImg from "../assets/Workout_App.png";
import AviationCrashImg from "../assets/Airplane_EDA.png"
import PBEMImg from "../assets/PBEM.png"
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="bio">
        <h1>Projects.</h1>
        <div className="projects-container">
        <div className="project-card">
          <img src={SmartFanImg} alt="Smart Fan Project" className="project-image" />
          <div className="project-content">
            <h2>Smart Fan</h2>
            <p>
              A smart fan system built using Arduino that automatically adjusts fan speed based on
              temperature input. Integrated with a display to show real-time sensor data.
            </p>
            <Link to="/projects/smart-fan">
              <button className="case-study-button">Case Study</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={WorkoutImg} alt="Workout App Project" className="project-image" />
          <div className="project-content">
            <h2>Fitness App</h2>
            <p>
              A smart fan system built using Arduino that automatically adjusts fan speed based on
              temperature input. Integrated with a display to show real-time sensor data.
            </p>
            <Link to="/projects/smart-fan">
              <button className="case-study-button">Case Study</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={AviationCrashImg} alt="Aviation Crash Analysis Project" className="project-image" />
          <div className="project-content">
            <h2>Plane Crash Data EDA</h2>
            <p>
              A smart fan system built using Arduino that automatically adjusts fan speed based on
              temperature input. Integrated with a display to show real-time sensor data.
            </p>
            <Link to="/projects/smart-fan">
              <button className="case-study-button">Case Study</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={PBEMImg} alt="Personality Based Event Project" className="project-image" />
          <div className="project-content">
            <h2>Personality Based Event Matching</h2>
            <p>
              A smart fan system built using Arduino that automatically adjusts fan speed based on
              temperature input. Integrated with a display to show real-time sensor data.
            </p>
            <Link to="/projects/smart-fan">
              <button className="case-study-button">Case Study</button>
            </Link>
          </div>
        </div>
      </div>
        <SocialIconsDesktop />
      </div>
      <SocialIconsMobile />
    </>
  );
}

export default Projects;