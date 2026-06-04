import "./css/Project.css";

const projects = [
  {
    id: "01",
    title: "E-Commerce Website",
    desc: "A responsive course-selling e-commerce frontend built with React, featuring dynamic product listings, cart management, and smooth navigation.",
    tech: ["React", "CSS", "REST API"],
    live: "https://e-commerce-bd1y.onrender.com/",
    code: null,
  },
  {
    id: "02",
    title: "Portfolio Website",
    desc: "This personal portfolio — crafted with React and custom CSS — showcasing projects, skills, and a morphic glass UI design.",
    tech: ["React", "CSS3", "Animations"],
    live: "#",
    code: "https://github.com/sayan234-py/Portfolio",
  },
  {
    id: "03",
    title: "Nandi Fashions",
    desc: "A full-stack MERN e-commerce platform with product management, user auth, and a complete shopping flow deployed on Render.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: null,
    code: "https://github.com/sayan234-py",
  },
  {
    id: "04",
    title: "MERN Weather App",
    desc: "Full-stack weather app with a dark morphic UI, WeatherAPI.com integration, location search, and real-time forecast data.",
    tech: ["MERN", "WeatherAPI", "CSS"],
    live: null,
    code: null,
  },
  {
    id: "05",
    title: "Hotel Management System",
    desc: "Academic project for managing reservations, billing, and customer records with a structured backend approach.",
    tech: ["React", "MongoDB", "Express"],
    live: null,
    code: null,
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-orb" />

      <div className="projects-header">
        <div className="page-label">// projects</div>
        <h2>Things I've Built</h2>
        <p className="projects-intro">
          A selection of projects built while learning and working with modern
          web technologies — from frontend UIs to full-stack MERN apps.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <span className="card-number">{p.id}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.live && (
                <button className="btn-live">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    ↗ Live
                  </a>
                </button>
              )}
              {p.code && (
                <button>
                  <a href={p.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              )}
              {!p.live && !p.code && (
                <button disabled style={{ opacity: 0.5, cursor: "default" }}>
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
