import { useEffect } from "react";
import "./css/About.css";

function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about">
      <div className="about-orb-1" />
      <div className="about-orb-2" />

      <div className="about-header">
        <div className="page-label">// about me</div>
        <h2>Who I Am</h2>
        <p className="intro">
          I'm <span>Sayan</span> — a BCA student and MERN Stack Developer who
          enjoys building clean, responsive, and user-focused web applications.
          I bring analytical thinking from my interest in markets and technical
          precision from hands-on project work.
        </p>
        <a href="/resume.pdf" download className="resume-btn">
          ↓ Download Resume
        </a>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <span className="item-icon">🎓</span>
          <h3>Education</h3>
          <p>
            Pursuing <strong>BCA (2023–2027)</strong> at Dr. B.C. Roy Academy,
            Durgapur — focused on full-stack development, databases, and modern
            web technologies.
          </p>
        </div>

        <div className="timeline-item">
          <span className="item-icon">💼</span>
          <h3>Internship</h3>
          <p>
            Completed a <strong>3-month MERN Stack internship</strong> at
            Anovatech (AICT Pvt. Ltd.) — built and deployed full-stack features
            using React, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        <div className="timeline-item">
          <span className="item-icon">🛠</span>
          <h3>Tech Stack</h3>
          <ul className="skills">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
            <li>HTML &amp; CSS</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="timeline-item">
          <span className="item-icon">🚀</span>
          <h3>Interests</h3>
          <p>
            I love exploring new technologies, stock market analysis, content
            creation, and photography — each keeps my mindset growth-oriented
            and creatively sharp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
