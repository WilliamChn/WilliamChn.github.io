import { SocialIconsDesktop, SocialIconsMobile } from "../components/SocialIcons";

function Home() {
  return (
    <>
      <div className="bio">
        <h1>Hello, I'm William Chen</h1>
        <p>A frontend-focused software engineer passionate about building smooth, responsive digital experiences.</p>
        <p>Whether it’s full-stack projects, embedded systems, or frontend development, I thrive at the intersection of code and creativity. I enjoy transforming complex ideas into intuitive, fun interfaces, and I’m always exploring new tools and technologies to improve my craft.</p>
        <div className="see-more-wrapper">
          <a href="/about" className="see-more">
            See More About Me <span className="arrow">→</span>
          </a>
        </div>
        <SocialIconsDesktop />
      </div>
      <SocialIconsMobile />
    </>
  );
}

export default Home;
