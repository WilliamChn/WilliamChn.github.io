import { SocialIconsDesktop, SocialIconsMobile } from "../components/SocialIcons";

function About() {
  return (
    <>
      <div className="bio about">
        <h1>About Me</h1>
        <p>Hi there — I’m William Chen, a software engineer born and raised in the heart of New York City. Growing up in a city where everything moves fast and innovation is part of the atmosphere, I was constantly surrounded by technology — subways, street kiosks, digital signage, apps guiding tourists — all of it sparked a question in me: <em>How does all this actually work?</em> That question eventually led me to discover computer science, and the more I learned, the more I realized I wanted to be one of those builders.</p>

        <p>I recently graduated from the University at Buffalo with a Bachelor of Science in Computer Science (May 2025). During my time there, I developed a strong foundation in systems programming, algorithms, and software design — but more importantly, I built things. From smart hardware to interactive web platforms, I’ve always enjoyed taking an idea, writing some code, and watching it come to life.</p>

        <p>I’m passionate about software engineering, particularly front-end and full-stack development. I enjoy creating user experiences that are not only functional but also fun to interact with — and yes, sometimes that means obsessing over just the right shade of blue.</p>

        <p>Whether it's an internship at a startup, a late-night hackathon, or a personal side project, I love working on software that connects people or makes their lives just a little bit easier (or more interesting). If you’re into quirky ideas, clean code, or boba-fueled brainstorming, we’ll probably get along.</p>

        <SocialIconsDesktop />
      </div>
      <SocialIconsMobile />
    </>
  );
}

export default About;
