import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-left">
          <h3>Sayan Nandi</h3>
          <p>
            MERN Stack Developer passionate about building modern, scalable, and
            user-focused web applications.
          </p>
        </div>

        
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        
        <div className="footer-right">
          <h4>Connect</h4>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sayan Nandi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


