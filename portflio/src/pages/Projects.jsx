import "./css/Project.css";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I've built while learning and working with
        modern web technologies.
      </p>

      <div className="projects-grid">
        {/* Project Card 1 */}
        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p>
            A responsive course-selling e-commerce frontend built using React,
            featuring dynamic product listing and smooth navigation.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>API</span>
          </div>
          <div className="project-links">
            <button><a
      href="https://e-commerce-bd1y.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
    Live
    </a></button>
            <button>Code</button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website to showcase my skills, projects, and
            experience with a modern UI and animations.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Framer Motion</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <button><Link>Live</Link></button>
            <button>Code</button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <h3>Hotel Management System</h3>
          <p>
            An academic project focused on managing reservations, billing, and
            customer records using a structured system approach.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>MongoDB</span>
            <span>HTML</span>
          </div>
          <div className="project-links">
            <button>Code</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
