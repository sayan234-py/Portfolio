import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Sayan Nandi</h3>
          <p>
            MERN Stack Developer building modern, scalable, and user-focused
            web applications. Currently open to internships and entry-level roles.
          </p>
        </div>

        <div className="footer-center">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Connect</h4>
          <a href="https://github.com/sayan234-py" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sayan-nandi-152581359" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:nsayan520@gmail.com">
            nsayan520@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sayan Nandi · All rights reserved.</span>
        <div className="footer-status">
          <span className="status-dot" />
          <span>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
