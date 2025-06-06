import { SocialIconsDesktop, SocialIconsMobile } from "../components/SocialIcons";
import "../styles/App.css"
import "../styles/Navbar.css"
import "../styles/MobileView.css"
import "../styles/SocialIcons.css"

function Projects() {
  return (
    <>
      <div className="bio">
        <h1>Projects.</h1>
        <SocialIconsDesktop />
      </div>
      <SocialIconsMobile />
    </>
  );
}

export default Projects;
