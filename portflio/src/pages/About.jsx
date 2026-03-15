import { useEffect } from "react";
import "./css/About.css";

function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="about">
      <h2>About Me</h2>

      
      <p className="intro">
        I'm <span>Sayan</span>, a BCA student and MERN Stack Developer who enjoys
        building clean, responsive, and user-focused web applications.
      </p>


      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>

      
      <div className="timeline">
        <div className="timeline-item">
          <h3>🎓 Education</h3>
          <p>
            Currently pursuing <strong>BCA</strong>, focusing on full-stack
            development, databases, and modern web technologies.
          </p>
        </div>

        <div className="timeline-item">
          <h3>💼 Internship</h3>
          <p>
            Completed a <strong>MERN Stack internship</strong> at Anovatech
            Institute Of Crystalline Technology Pvt. Ltd., where I worked on
            real-world projects using React, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        <div className="timeline-item">
          <h3>🛠 Skills</h3>
          <ul className="skills">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="timeline-item">
          <h3>🚀 Interests</h3>
          <p>
            I love learning new technologies, traveling, and exploring the stock
            market, which keeps my mindset analytical and growth-oriented.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
